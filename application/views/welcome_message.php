<?php
/**
* Vista de cv
* @author Pablo de Jesús
*/

/* @var $arr string[] */
$arr = $arr;
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title><?= $arr[0] ?></title>

	<!-- Meta -->
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="CV">
	<meta name="author" content="Xiaoying Riley at 3rd Wave Media">
	<link rel="shortcut icon" href="/favicon.ico">

	<!-- Google Font -->
	<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet">

	<!-- FontAwesome JS-->
	<script defer src="https://use.fontawesome.com/releases/v5.1.1/js/all.js" integrity="sha384-BtvRZcyfv4r0x/phJt9Y9HhnN5ur1Z+kZbKVgzVBAlQZX4jvAuImlIz+bG7TS00a" crossorigin="anonymous"></script>

	<!-- Theme CSS -->
	<link id="theme-style" rel="stylesheet" href="/css/pillar-1.css">
</head>
<body>
	<div class="text-center pt-2 pb-5">
    <a href="/index.php">Spanish</a>
		<a href="/index.php/welcome/english">English</a>
	</div>
	<article class="resume-wrapper text-center position-relative">
		<div class="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
			<header class="resume-header pt-4 pt-md-0">
				<div class="media flex-column flex-md-row">
					<img class="mr-3 img-fluid picture mx-auto" src="/images/profile.jpg" alt="Profile image">
					<div class="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
						<div class="primary-info">
							<h1 class="name mt-0 mb-1 text-white text-uppercase text-uppercase">Pablo de Jesús</h1>
							<div class="title mb-3"><?= $arr[1] ?></div>
							<ul class="list-unstyled">
								<li class="mb-2"><a href="mailto:pag753@gmail.com"><i class="far fa-envelope fa-fw mr-2" data-fa-transform="grow-3"></i>pag753@gmail.com</a></li>
								<li><a href="tel:+52 1 238 133 60 66"><i class="fas fa-mobile-alt fa-fw mr-2" data-fa-transform="grow-6"></i>+52 1 238 133 60 66</a></li>
							</ul>
						</div><!--//primary-info-->
						<div class="secondary-info ml-md-auto mt-2">
							<ul class="resume-social list-unstyled">
								<li class="mb-3"><a href="https://www.linkedin.com/in/pag753/" target="_blank"><span class="fa-container text-center mr-2"><i class="fab fa-linkedin-in fa-fw"></i></span>linkedin.com/in/pag753</a></li>
								<li class="mb-3"><a href="https://github.com/pag753/" target="_blank"><span class="fa-container text-center mr-2"><i class="fab fa-github-alt fa-fw"></i></span>github.com/pag753</a></li>
								<li class="mb-3"><a href="https://codepen.io/pag753/" target="_blank"><span class="fa-container text-center mr-2"><i class="fab fa-codepen fa-fw"></i></span>codepen.io/pag753</a></li>
								<li><a href="https://pag753.000webhostapp.com/" target="_blank"><span class="fa-container text-center mr-2"><i class="fas fa-globe"></i></span>pag753.000webhostapp.com</a></li>
							</ul>
						</div><!--//secondary-info-->
						<div class="secondary-info ml-md-auto mt-2">
							<ul class="resume-social list-unstyled">
								<li class="mb-3"><a href="whatsapp://send?abid=+5212381336066&text=Hello%2C%20Pablo!" target="_blank"><span class="fa-container text-center mr-1"><i class="fab fa-whatsapp"></i></span></a></li>
								<li class="mb-3"><a href="https://www.facebook.com/messages/t/PAdJGA" target="_blank"><span class="fa-container text-center mr-1"><i class="fab fa-facebook-messenger"></i></span></a></li>
								<li class="mb-3"><a href="https://www.instagram.com/pag753" target="_blank"><span class="fa-container text-center mr-1"><i class="fab fa-instagram"></i></span></a></li>
								<li class="mb-3"><a href="https://twitter.com/pa_753" target="_blank"><span class="fa-container text-center mr-1"><i class="fab fa-twitter"></i></span></a></li>
							</ul>
						</div><!--//secondary-info-->
					</div><!--//media-body-->
				</div><!--//media-->
			</header>
			<div class="resume-body p-5">
				<section class="resume-section summary-section mb-5">
					<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3"><?= $arr[2] ?></h2>
					<div class="resume-section-content">
						<p class="mb-0"><?= $arr[3] ?></p>
					</div>
				</section><!--//summary-section-->
				<div class="row">
					<div class="col-lg-9">
						<section class="resume-section experience-section mb-5">
							<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3"><?= $arr[4] ?></h2>
							<div class="resume-section-content">
								<div class="resume-timeline position-relative">
									<article class="resume-timeline-item position-relative pb-5">

										<div class="resume-timeline-item-header mb-2">
											<div class="d-flex flex-column flex-md-row">
												<h3 class="resume-position-title font-weight-bold mb-1"><?= $arr[5] ?></h3>
												<div class="resume-company-name ml-auto">TecNM / Instituto Tecnológico de Tehuacán</div>
											</div><!--//row-->
											<div class="resume-position-time"><?= $arr[6] ?></div>
										</div><!--//resume-timeline-item-header-->
										<div class="resume-timeline-item-desc">
											<p><?= $arr[7] ?></p>
											<h4 class="resume-timeline-item-desc-heading font-weight-bold"><?= $arr[8] ?></h4>
											<p><?= $arr[9] ?></p>
											<ul>
												<li><?= $arr[10] ?></li>
												<li><?= $arr[11] ?></li>
												<li><?= $arr[12] ?></li>
											</ul>
											<h4 class="resume-timeline-item-desc-heading font-weight-bold"><?= $arr[13] ?></h4>
											<ul class="list-inline">
												<li class="list-inline-item"><span class="badge badge-primary badge-pill">PHP 7</span></li>
												<li class="list-inline-item"><span class="badge badge-primary badge-pill">Yii 2</span></li>
												<li class="list-inline-item"><span class="badge badge-primary badge-pill">jQuery</span></li>
												<li class="list-inline-item"><span class="badge badge-primary badge-pill">MariaDB</span></li>
												<li class="list-inline-item"><span class="badge badge-primary badge-pill">HTML5</span></li>
												<li class="list-inline-item"><span class="badge badge-primary badge-pill">Bootstrap 4</span></li>
											</ul>
										</div><!--//resume-timeline-item-desc-->

									</article><!--//resume-timeline-item-->

									<article class="resume-timeline-item position-relative pb-5">

										<div class="resume-timeline-item-header mb-2">
											<div class="d-flex flex-column flex-md-row">
												<h3 class="resume-position-title font-weight-bold mb-1"><?= $arr[14] ?></h3>
												<div class="resume-company-name ml-auto">Lavados Especiales</div>
											</div><!--//row-->
											<div class="resume-position-time"><?= $arr[15] ?></div>
										</div><!--//resume-timeline-item-header-->
										<div class="resume-timeline-item-desc">
											<p><?= $arr[16] ?></p>
											<h4 class="resume-timeline-item-desc-heading font-weight-bold"><?= $arr[17] ?></h4>
											<p><?= $arr[18] ?></p>
											<h4 class="resume-timeline-item-desc-heading font-weight-bold"><?= $arr[13] ?></h4>
											<ul class="list-inline">
												<li class="list-inline-item"><span class="badge badge-primary badge-pill">PHP 7</span></li>
												<li class="list-inline-item"><span class="badge badge-primary badge-pill">Codeigniter</span></li>
												<li class="list-inline-item"><span class="badge badge-primary badge-pill">MySQL</span></li>
												<li class="list-inline-item"><span class="badge badge-primary badge-pill">jQuery</span></li>
												<li class="list-inline-item"><span class="badge badge-primary badge-pill">HTML5</span></li>
												<li class="list-inline-item"><span class="badge badge-primary badge-pill">Bootstrap 4</span></li>
												<li class="list-inline-item"><span class="badge badge-primary badge-pill">Data Tables</span></li>
											</ul>
										</div><!--//resume-timeline-item-desc-->

									</article><!--//resume-timeline-item-->


								</div><!--//resume-timeline-->

							</div>
						</section><!--//experience-section-->

					</div>
					<div class="col-lg-3">
						<section class="resume-section skills-section mb-5">
							<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3"><?= $arr[19] ?></h2>
							<div class="resume-section-content">

								<div class="resume-skill-item">
									<h4 class="resume-skills-cat font-weight-bold"><?= $arr[20] ?></h4>
									<ul class="list-unstyled mb-4">
										<li class="mb-2">
											<div class="resume-skill-name">PHP</div>
											<div class="progress resume-progress">
												<div class="progress-bar theme-progress-bar-dark" role="progressbar" style="width: 80%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</li>
										<li class="mb-2">
											<div class="resume-skill-name">JavaScript</div>
											<div class="progress resume-progress">
												<div class="progress-bar theme-progress-bar-dark" role="progressbar" style="width: 70%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</li>
										<li class="mb-2">
											<div class="resume-skill-name">Python</div>
											<div class="progress resume-progress">
												<div class="progress-bar theme-progress-bar-dark" role="progressbar" style="width: 60%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</li>
										<li class="mb-2">
											<div class="resume-skill-name">Java</div>
											<div class="progress resume-progress">
												<div class="progress-bar theme-progress-bar-dark" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</li>
										<li class="mb-2">
											<div class="resume-skill-name">C / C++ / C#</div>
											<div class="progress resume-progress">
												<div class="progress-bar theme-progress-bar-dark" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</li>
									</ul>
								</div>

								<div class="resume-skill-item">
									<h4 class="resume-skills-cat font-weight-bold">Frontend</h4>
									<ul class="list-unstyled mb-4">
										<li class="mb-2">
											<div class="resume-skill-name">jQuery</div>
											<div class="progress resume-progress">
												<div class="progress-bar theme-progress-bar-dark" role="progressbar" style="width: 80%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</li>
										<li class="mb-2">
											<div class="resume-skill-name">Bootstrap</div>
											<div class="progress resume-progress">
												<div class="progress-bar theme-progress-bar-dark" role="progressbar" style="width: 80%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</li>
										<li class="mb-2">
											<div class="resume-skill-name">HTML/CSS</div>
											<div class="progress resume-progress">
												<div class="progress-bar theme-progress-bar-dark" role="progressbar" style="width: 80%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</li>
									</ul>
								</div><!--//resume-skill-item-->

								<div class="resume-skill-item">
									<h4 class="resume-skills-cat font-weight-bold">Backend</h4>
									<ul class="list-unstyled">
										<li class="mb-2">
											<div class="resume-skill-name">PHP Frameworks</div>
											<div class="progress resume-progress">
												<div class="progress-bar theme-progress-bar-dark" role="progressbar" style="width: 80%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</li>
										<li class="mb-2">
											<div class="resume-skill-name">Node.js</div>
											<div class="progress resume-progress">
												<div class="progress-bar theme-progress-bar-dark" role="progressbar" style="width: 60%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</li>
										<li class="mb-2">
											<div class="resume-skill-name">Python/Django</div>
											<div class="progress resume-progress">
												<div class="progress-bar theme-progress-bar-dark" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</li>
									</ul>
								</div><!--//resume-skill-item-->

								<div class="resume-skill-item">
									<h4 class="resume-skills-cat font-weight-bold"><?= $arr[21] ?></h4>
									<ul class="list-inline">
										<li class="list-inline-item"><span class="badge badge-light">Git</span></li>
										<li class="list-inline-item"><span class="badge badge-light">FontAwesome</span></li>
									</ul>
								</div><!--//resume-skill-item-->
							</div><!--resume-section-content-->
						</section><!--//skills-section-->
						<section class="resume-section education-section mb-5">
							<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3"><?= $arr[22] ?></h2>
							<div class="resume-section-content">
								<ul class="list-unstyled">
									<li class="mb-2">
										<div class="resume-degree font-weight-bold"><?= $arr[23] ?></div>
										<div class="resume-degree-org"><a href="http://www.ittehuacan.edu.mx" target="_blank">TecNM / Instituto Tecnológico de Tehuacán</a></div>
										<div class="resume-degree-time">2014 - 2018</div>
									</li>
								</ul>
							</div>
						</section><!--//education-section-->
						<section class="resume-section reference-section mb-5">
							<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3"><?= $arr[24] ?></h2>
							<div class="resume-section-content">
								<ul class="list-unstyled resume-awards-list">
									<li class="mb-2 pl-4 position-relative">
										<i class="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
										<div class="resume-award-name"><?= $arr[25] ?></div>
										<div class="resume-award-desc"><?= $arr[26] ?></div>
									</li>
								</ul>
							</div>
						</section><!--//interests-section-->
						<section class="resume-section language-section mb-5">
							<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3"><?= $arr[27] ?></h2>
							<div class="resume-section-content">
								<ul class="list-unstyled resume-lang-list">
									<li class="mb-2"><span class="resume-lang-name font-weight-bold"><?= $arr[28] ?> </span> <small class="text-muted font-weight-normal">(<?= $arr[29] ?>)</small></li>
									<li class="mb-2 align-middle"><span class="resume-lang-name font-weight-bold"><?= $arr[30] ?></span> <small class="text-muted font-weight-normal">(<?= $arr[31] ?>)</small></li>
								</ul>
							</div>
						</section><!--//language-section-->
						<section class="resume-section interests-section mb-5">
							<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3"><?= $arr[32] ?></h2>
							<div class="resume-section-content">
								<ul class="list-unstyled">
									<li class="mb-1"><?= $arr[33] ?></li>
									<li class="mb-1"><?= $arr[34] ?></li>
									<li class="mb-1"><?= $arr[35] ?></li>
								</ul>
							</div>
						</section><!--//interests-section-->
						<section class="resume-section education-section mb-5">
							<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3"><?= $arr[36] ?></h2>
							<div class="resume-section-content">
								<ul class="list-unstyled">
									<li class="mb-2">
										<div class="resume-degree font-weight-bold"><?= $arr[37] ?></div>
										<div class="resume-degree-org"><a href="https://www.campomision.org.mx/" target="_blank">Misioneros Servidores de la Palabra</a></div>
										<div class="resume-degree-time"><?= $arr[38] ?></div>
									</li>
								</ul>
							</div>
						</section><!--//education-section-->

					</div>
				</div><!--//row-->
			</div><!--//resume-body-->


		</div>
	</article>


	<footer class="footer text-center pt-2 pb-5">
		<!--/* This template is released under the Creative Commons Attribution 3.0 License. Please keep the attribution link below when using for your own project. Thank you for your support. :) If you'd like to use the template without the attribution, you can buy the commercial license via our website: themes.3rdwavemedia.com */-->
		<a href="/index.php">Spanish</a>
		<a href="/index.php/welcome/english">English</a>
	</footer>
</body>
</html>
