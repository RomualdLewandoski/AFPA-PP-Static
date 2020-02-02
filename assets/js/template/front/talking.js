var template = `<section class="page-section" id="talking">
    <div class="container-fluid">
        <h2 class="text-center mt-4">Ils parlent de nous </h2>
        <hr class="divider light my-4">
        <div class="row items text-black-50 " id="ratingBlock">
            %talking%
        </div>
    </div>

</section>
`;

export default function () {
    return {
      view : template
    };
}