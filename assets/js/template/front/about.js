var template = `<section class="page-section" id="about">
    <div class="container">
        <div class="row">
            <div class="col-md-3 mb-2">
                <div class="card bg-success text-white">
                    <div class="card-body">
                        <h4 class="text-center"><i class="fa fa-user "></i> Inscrits </h4>
                        <h5 class="text-center mt-2"><span class="Count" id="countUser">%users%</span></h5>
                    </div>
                </div>
            </div>

            <div class="col-md-3 mb-2">
                <div class="card bg-warning text-white">
                    <div class="card-body">
                        <h4 class="text-center"><i class="fa fa-rocket "></i> Projets lancés </h4>
                        <h5 class="text-center mt-2"><span class="Count" id="countProject">%projects%</span></h5>
                    </div>
                </div>
            </div>

            <div class="col-md-3 mb-2">
                <div class="card bg-info text-white">
                    <div class="card-body">
                        <h4 class="text-center"><i class="fa fa-mug-hot "></i> Tasses de café</h4>
                        <h5 class="text-center mt-2"><span class="Count" id="countCafe">%cafe%</span></h5>
                    </div>
                </div>
            </div>

            <div class="col-md-3 mb-2">
                <div class="card bg-danger text-white">
                    <div class="card-body">
                        <h4 class="text-center"><i class="fa fa-code"></i> Lignes de codes</h4>
                        <h5 class="text-center mt-2"><span class="Count" id="countCode">%codes%</span></h5>
                    </div>
                </div>
            </div>


        </div>
    </div>
</section>
`;

export default function () {
    return {
        view : template
    };
}