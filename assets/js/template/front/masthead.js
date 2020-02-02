var template = `
<header class="masthead"
        style="background: linear-gradient(to bottom, rgba(92, 77, 66, .8) 0, rgba(92, 77, 66, .8) 100%), url(https://picsum.photos/300/200/?blur=2) no-repeat; background-size: 100% 100%; ">
    <div class="container h-100">
        <div class="row h-100 align-items-center justify-content-center text-center">
            <div class="col-lg-10 align-self-end">
                <h1 class="text-uppercase text-white font-weight-bold">Moonly</h1>
                <hr class="divider my-4">
            </div>
            <div class="col-lg-8 align-self-baseline">
                <p class="text-white-75 font-weight-light mb-5" id="subtitle"></p>
                <a class="btn btn-primary btn-xl js-scroll-trigger" href="#features">En savoir plus</a>
            </div>
        </div>
    </div>
</header>
`;

export default function () {
    return {
        view : template
    };
}