@inject('str', 'Statamic\Support\Str')
@extends('statamic::outside')
@section('title', __('Log in'))

@section('content')
<div class="logo pt-7">
    <svg viewBox="0 0 90 17.5" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 7.316c0-.786-.574-1.342-1.344-1.342-.855 0-1.411.581-1.411 1.514v8.288c0 .736.599 1.334 1.394 1.334.761 0 1.361-.598 1.361-1.334V9.685c.505-.761 1.273-1.146 2.248-1.146 1.155 0 1.797.72 1.797 1.865v5.372c0 .736.599 1.334 1.394 1.334.762 0 1.361-.598 1.361-1.334v-5.2c0-.172-.017-.694-.017-.788.427-.838 1.172-1.249 2.224-1.249 1.223 0 1.846.693 1.846 2.062v5.175c0 .736.6 1.334 1.387 1.334.77 0 1.368-.598 1.368-1.334V9.882c0-2.609-1.155-3.926-3.455-3.926-1.558 0-2.754.574-3.636 1.72-.411-1.027-1.531-1.72-3.139-1.72-1.411 0-2.541.454-3.378 1.36zm17.361 8.263c1.079 1.079 2.49 1.608 4.243 1.608 1.745 0 3.183-.529 4.26-1.608 1.078-1.052 1.608-2.395 1.608-4.045 0-1.652-.53-2.995-1.608-4.072-1.077-1.052-2.515-1.582-4.26-1.582-1.753 0-3.164.53-4.243 1.582-1.076 1.077-1.625 2.42-1.625 4.072 0 1.65.549 2.993 1.625 4.045zm1.317-4.045c0-1.822 1.276-3.063 2.926-3.063 1.703 0 2.943 1.266 2.943 3.063 0 1.847-1.223 3.087-2.943 3.087-1.702 0-2.926-1.291-2.926-3.087zm10.466 3.498c0 .36.146.668.453.932.985.812 2.234 1.223 3.738 1.223 2.661 0 4.363-1.343 4.363-3.446 0-1.42-.914-2.379-2.061-2.78-1.677-.599-3.765-.839-3.765-1.848 0-.504.558-.933 1.344-.933.693 0 1.343.146 1.967.411.214.094.429.136.643.136.435 0 .744-.188.958-.547.101-.171.145-.359.145-.547 0-.385-.189-.702-.574-.941-.932-.547-2.01-.812-3.284-.812-2.293 0-3.952 1.247-3.952 3.284 0 2.343 2.113 2.969 3.788 3.396 1.122.317 2.036.676 2.036 1.317 0 .65-.572 1.009-1.41 1.009a4.666 4.666 0 01-2.498-.692c-.257-.171-.521-.265-.787-.265-.333 0-.624.145-.864.427-.163.171-.24.411-.24.676zm10.179-1.275c0 2.036 1.37 3.31 3.381 3.31 1.437 0 2.488-.435 3.181-1.291 0 .761.479 1.291 1.172 1.291.701 0 1.223-.573 1.223-1.223v-5.482c0-2.968-1.24-4.482-4.312-4.482-.958 0-1.863.196-2.754.573-.521.222-.786.581-.786 1.035 0 .163.025.308.094.454.189.384.504.572.933.572.119 0 .291-.026.555-.094.496-.17 1.078-.24 1.676-.24 1.455 0 2.011.788 2.011 2.446v.335c-.65-.453-1.462-.694-2.447-.694-2.301 0-3.927 1.215-3.927 3.49zm6.374 0c-.453.65-1.155.985-2.088.985-.881 0-1.531-.48-1.531-1.268 0-.864.744-1.341 1.728-1.341.788 0 1.438.17 1.891.529v1.095zM67.1 7.316c0-.744-.599-1.342-1.368-1.342-.788 0-1.386.598-1.386 1.342v8.46c0 .736.598 1.334 1.386 1.334.769 0 1.368-.598 1.368-1.334v-8.46zM65.783.662c-.958 0-1.727.642-1.727 1.6 0 1.06.743 1.728 1.727 1.728.839 0 1.582-.668 1.582-1.728 0-.958-.743-1.6-1.582-1.6zm11.449 15.713c.359.496.813.735 1.335.735.796 0 1.369-.598 1.369-1.334 0-.317-.121-.599-.335-.915l-2.951-3.78 2.446-2.969c.214-.265.308-.556.308-.864 0-.693-.478-1.274-1.317-1.274-.496 0-.931.239-1.291.744l-2.875 3.831a1.157 1.157 0 00-.238.72c0 .315.076.556.238.77l3.311 4.336zM73.322 1.5c0-.744-.597-1.343-1.358-1.343-.796 0-1.395.599-1.395 1.343v14.276c0 .736.599 1.334 1.395 1.334a1.34 1.34 0 001.358-1.334V1.5z"/></svg>
</div>
<div class="card auth-card mx-auto">
    <login inline-template :show-email-login="!{{ $str::bool($oauth) }}" :has-error="{{ $str::bool(count($errors) > 0) }}">
    <div>
        @if ($oauth)
            <div class="login-oauth-providers">
                @foreach ($providers as $provider)
                    <div class="provider mb-1">
                        <a href="{{ $provider->loginUrl() }}?redirect={{ parse_url(cp_route('index'))['path'] }}" class="btn block btn-primary">
                            {{ __('Log in with :provider', ['provider' => $provider->label()]) }}
                        </a>
                    </div>
                @endforeach
            </div>

            <div class="text-center italic my-3">or</div>

            <div class="login-with-email" v-if="! showEmailLogin">
                <a class="btn block" @click.prevent="showEmailLogin = true">
                    {{ __('Log in with email') }}
                </a>
            </div>
        @endif

        <form method="POST" v-show="showEmailLogin" class="email-login select-none" @if ($oauth) v-cloak @endif>
            {!! csrf_field() !!}

            <input type="hidden" name="referer" value="{{ $referer }}" />

            <div class="mb-4">
                <label class="mb-1">{{ __('Email') }}</label>
                <input type="text" class="input-text input-text" name="email" value="{{ old('email') }}" autofocus>
                @if ($hasError('email'))<div class="text-red text-xs mt-1">{{ $errors->first('email') }}</div>@endif
            </div>

            <div class="mb-4">
                <label class="mb-1">{{ __('Password') }}</label>
                <input type="password" class="input-text input-text" name="password" id="password">
                @if ($hasError('password'))<div class="text-red text-xs mt-1">{{ $errors->first('password') }}</div>@endif
            </div>
            <div class="flex justify-between items-center">
                <label for="remember_me" class="flex items-center cursor-pointer">
                    <input type="checkbox" name="remember" id="remember_me">
                    <span class="ml-1">{{ __('Remember me') }}</span>
                </label>
                <button type="submit" class="btn-primary">{{ __('Log in') }}</button>
            </div>
        </form>
    </div>
    </login>
</div>
@if (! $oauth)
    <div class="w-full text-center mt-2">
        <a href="{{ cp_route('password.request')}}" class="forgot-password-link text-sm opacity-75 hover:opacity-100">
            {{ __('Forgot password?') }}
        </a>
    </div>
@endif

@endsection