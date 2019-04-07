<?php session_start(); /* Starts the session */
if(!isset($_SESSION['UserData']['Username'])){
header("location:login.php");
exit;
}
?>

<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8" />
        
        <title>postlogin</title>
        
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        
       	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
		<meta name="theme-color" content="#" />
		<meta name="yandex-tableau-widget" content="logo=, color=#" />
		
		<meta property="og:title" content="" />
		<meta property="og:site_name" content="" />
		<meta property="og:url" content="" />
		<meta property="og:description" content="" />
		<meta property="og:image" content="" />
        
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        
    	<link rel="shortcut icon" type="image/x-icon" href="" />

    </head>
    <body id="top" style="background: #E0ECD7;">
    	<header class="">
			<div class="container">
				<a class="header-logo" href="index.html" title="">
					<img class="hover-trans-05" src="images/logo.png" alt="" title="" />
				</a>
				<div class="header-text table-block">
					<p>Annual Report <strong>2018</strong></p>
				</div>
				<div class="header-bob-menu-bt-block table-block">
					<div>
						<button id="header-bob-menu-bt" class="def-bt"></button>
					</div>
				</div>
			</div>
			<div class="header-bottom-border"></div>
			<div id="header-menu-block">
				<div class="container">
					<div class="header-menu-img-title">
						<p class="caveatB">Nurturing <br />&nbsp;Relationships</p>
					</div>
				
					<nav class="header-navigation">
						<ul>
							<li class="in">
								<a class="hover-trans-05" href="about.html" title="">About Us</a>
								<ul>
									<li>
										<a class="hover-trans-05" href="about.html#vis-mis-val" title="">Our Vision, Mission &amp; Values</a>
									</li>
									<li>
										<a class="hover-trans-05" href="about.html#bus-units" title="">Our Business Units</a>
									</li>
								</ul>
							</li>
							<li>
								<a class="hover-trans-05" href="message.html" title="">Message from Chairman &amp; CEO</a>
							</li>
							<li class="in">
								<a>Nurturing Relationships</a>
								<a class="hover-trans-05" href="#" title="">Nurturing Relationships</a>
								<ul>
									<li>
										<a class="hover-trans-05" href="partnering-familes.html" title="">Partnering Families</a>
									</li>
									<li>
										<a class="hover-trans-05" href="growing-together.html" title="">Growing Together</a>
									</li>
									<li>
										<a class="hover-trans-05" href="touching.html" title="">Touching More Lives</a>
									</li>
									<li>
										<a class="hover-trans-05" href="touching.html#raise_bar" title="">Raising The Bar</a>
									</li>
									<li>
										<a class="hover-trans-05" href="leading-the-way.html" title="">Leading The Way</a>
									</li>
								</ul>
							</li>
						</ul>
					</nav>
					
					<nav class="header-navigation">
						<ul>
							<li>
								<a class="hover-trans-05" href="board-of-directors.html" title="">Board of Directors</a>
							</li>
							<li>
								<a class="hover-trans-05" href="leadership.html" title="">Leadership Team</a>
							</li>
							<li>
								<a class="hover-trans-05" href="corporate-information.html" title="">Corporate Information</a>
							</li>
							<li>
								<a class="hover-trans-05" href="login.php" title="">Financial Report <span class="bg pg-menu-link-img"></span></a>
							</li>
						</ul>
					</nav>
					
					<div class="clear"></div>
					<div class="header-coop">
						<p>© 2019 NTUC First Campus Co-operative Limited. All rights reserved.</p>
						<p>
							
							
						</p>
					</div>
					<div class="header-social">
						<a class="hover-trans-05" href="https://www.facebook.com/ntucfirstcampus/" target="_blank" title="">
							<img src="images/social/f.png" alt="" title="" />
						</a>
						<a class="hover-trans-05" href="https://www.youtube.com/user/ntucfirstcampus" target="_blank" title="">
							<img src="images/social/y.png" alt="" title="" />
						</a>
						<a class="hover-trans-05" href="https://www.linkedin.com/company/ntuc-first-campus" target="_blank" title="">
							<img src="images/social/i.png" alt="" title="" />
						</a>
					</div>
				</div>
			</div>
		</header>
		
		<div class="content-2-block" style="background: fixed url( 'images/postlogin.png' ) center no-repeat; background-size: cover;">
			<div class="container postlogin">
				
				<h2>For Shareholders</h2>
				<p class="big-p">NTUC FIRST CAMPUS 27TH ANNUAL GENERAL MEETING</p>
				<p>Documents for shareholders. To download the documents, please click on the individual download button.
Please note that the documents will be available for download from
<span><strong>26 April 2019 to 14 May 2019, 0000hrs</strong></span></p>
				<div class="pdf-block">
					<div>
						<img src="images/pdf.png" alt="" title="" />
						<p>Notice of the 27th AGM</p>
						<a class="hover-trans-05" href="#" title="" target="_blank" download>Download</a>
					</div>
					
					<div>
						<img src="images/pdf.png" alt="" title="" />
						<p>Audited Financial Statements for the financial year ended 31 December 2018</p>
						<a class="hover-trans-05" href="#" title="" target="_blank" download>Download</a>
					</div>
					
					<div>
						<img src="images/pdf.png" alt="" title="" />
						<p>Minutes of the 26th Annual General Meeting held on 06 June 2018</p>
						<a class="hover-trans-05" href="#" title="" target="_blank" download>Download</a>
					</div>
					
					<div>
						<img src="images/pdf.png" alt="" title="" />
						<p>Proxy Form</p>
						<a class="hover-trans-05" href="#" title="" target="_blank" download>Download</a>
					</div>
					
					<div>
						<img src="images/pdf.png" alt="" title="" />
						<p>Directions to NTUC Centre</p>
						<a class="hover-trans-05" href="#" title="" target="_blank" download>Download</a>
					</div>
				</div>
				<a class="hover-trans-05 orange-button" href="logout.php" title="">LOGOUT</a>
			</div>
		</div>
		
		<footer>
			<div class="footer-top">
				<div class="container">
					<div class="left">
						<p>Back to <br /><a href="https://www.ntucfirstcampus.com" title="" target="_blank">www.ntucfirstcampus.com</a></p>
					</div>
					
<div class="right">
						<ul>
							<li>
								<a href="about.html" title="">ABOUT US</a>
							</li>
							<li>
								<a href="message.html" title="">MESSAGE FROM CHAIRMAN &amp; CEO</a>
							</li>
							<li>
								<a href="index.html" title="">NURTURING RELATIONSHIPS</a>
							</li>
							<li>
								<a href="board-of-directors.html" title="">BOARD OF DIRECTORS</a>
							</li>
							<li>
								<a href="leadership.html" title="">LEADERSHIP TEAM</a>
							</li>
							<li>
								<a href="corporate-information.html" title="">CORPORATE INFORMATION</a>
							</li>
							<li>
								<a href="login.php" title="">FINANCIAL REPORT <span class="close-img bg"></span></a>
							</li>
						</ul>
					</div>
					
					<div class="footer-social">
						<a class="hover-trans-05" href="https://www.facebook.com/ntucfirstcampus/" target="_blank" title="">
							<img src="images/social/f-w.png" alt="" title="" />
						</a>
						<a class="hover-trans-05" href="https://www.youtube.com/user/ntucfirstcampus" target="_blank" title="">
							<img src="images/social/y-w.png" alt="" title="" />
						</a>
						<a class="hover-trans-05" href="https://www.linkedin.com/company/ntuc-first-campus" target="_blank" title="">
							<img src="images/social/i-w.png" alt="" title="" />
						</a>
					</div>
				</div>
			</div>
			<div class="footer-bottom">
				<div class="container table-block">
					<div>
						<p class="left">© 2019 NTUC First Campus Co-operative Limited. All rights reserved.</p>
						<p class="right"></p>
					</div>
				</div>
			</div>
		</footer>
		<style>.green-bg p { text-align: left!important; }</style>
		<script type="text/javascript" src="js/main-script.js"></script>
		
		<script type="text/javascript" src="js/imagesloaded.pkgd.min.js"></script>
		<script type="text/javascript" src="js/anime.min.js"></script>
		<script type="text/javascript" src="js/scrollMonitor.js"></script>
		<script type="text/javascript" src="js/animate-script-3.js"></script>
    </body>
</html>