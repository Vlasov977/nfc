<!DOCTYPE HTML>
<?php session_start(); /* Starts the session */
/* Check Login form submitted */if(isset($_POST['Submit'])){
/* Define username and associated password array */$logins = 
array(
'N1900292' => 'hXh8e4L5',     
'N1932293' => 'XbMK6WEm',     
'N1924293' => 'nwU9FLaT',     
'N1913392' => 'q3WZA3Y4',     
'N1927293' => 'mAQNMB5U',     
'N1914092' => 'Eh9S9qg2',     
'N1922293' => '5SnvuyW7',     
'N1943195' => '6sExNLXE',     
'N1914192' => 'w2jPUYSz',     
'N1900592' => '7DuKu2LH',     
'N1932393' => 'gvRf2LV2',     
'N1924393' => 'PB7QUhsp',     
'N1935294' => 'T5Qb452T',     
'N1900792' => 'kU82Gdxj',     
'N1900892' => 'wfnW3P8n',     
'N1900992' => 'q7USwmRV',     
'N1914492' => '3e9ZPRjh',     
'N1914592' => 'AWcE2gC4',     
'N1927493' => 'YsKB9bRy',     
'N1943295' => 'rS26uNMz',     
'N1927593' => 'Zd8U9we3',     
'N1924493' => 'P6wreY8U',     
'N1901292' => 'PhSV93gt',     
'N1901392' => 'GZ3YKd3D',     
'N1930493' => '9hFfKhtD',     
'N1926593' => '7mfJgKUP',     
'N1942895' => 'Gh5R7Kuc',     
'N1901492' => 'cvR2Advm',     
'N1901592' => 'h4xAMScV',     
'N1922393' => '2HLcW5sP',     
'N1917892' => 'bQtVF3WJ',     
'N1901692' => '2QnskgYU',     
'N1901792' => 'vWWYU633',     
'N1936994' => 'fR92NWBC',     
'N1924593' => 'bAFX2LkY',     
'N1924693' => 'tbPHe3Ef',     
'N1941695' => 'Rm7NAEBE',     
'N1914792' => 'w8eN2PS6',     
'N1901892' => 'jQ8jWGy9',     
'N1935394' => 'Er3fp4yJ',     
'N1937094' => 'H5VxQmrJ',     
'N1933393' => 'eX7WmNrw',     
'N1933893' => '4RqA2cms',     
'N1901992' => 'xVVBx2xT',     
'N1902092' => 'shB4uWuC',     
'N1943395' => '5EpgKEL5',     
'N1937194' => '8zTAw5k3',     
'N1913492' => 'bU6yL9EX',     
'N1930693' => 'Tj9GkDrS',     
'N1902292' => 'ADh8SqQ3',     
'N1914992' => 'SD5rNNAV',     
'N1919992' => 'yNW7rzKy',     
'N1920092' => 'p3yu3H3S',     
'N1902492' => 'jfWYQ2t3',     
'N1922493' => 'yX9JRz3N',     
'N1940294' => 'K82aH4HP',     
'N1927693' => 'bJ5aMXYy',     
'N1920192' => 'u7KSkQUh',     
'N1941895' => 'T9FXcx6H',     
'N1902592' => 'HsghnT9r',     
'N1924893' => 'x5NjwY2Z',     
'N1920292' => 'mr2eVgVy',     
'N1930793' => 'WYK6f9kn',     
'N1939194' => 'hurNeA9M',     
'N1902692' => 'z3cqWQSP',     
'N1939294' => 'F6YGby6x',     
'N1922593' => '7dSQCWW8',     
'N1932593' => 'bnUW7NHs',     
'N1940394' => 'Z27LUv47',     
'N1933993' => 'EpMU7TRE',     
'N1922693' => 'Hkvc6tCz',     
'N1902792' => 'm6bGHK7D',     
'N1935494' => 'Yjvpz4Wt',     
'N1915292' => 'wh6LBtEh',     
'N1929893' => 'hU8FwySs',     
'N1941995' => 'DYnG873B',     
'N1903192' => 'CQG5c5gM',     
'N1915392' => 'rbVFb9bS',     
'N1922793' => 'uLK5P7yZ',     
'N1927793' => 'ghLUkY8N',     
'N1924993' => 'ww55AHDM',     
'N1915492' => 'WS8cUshg',     
'N1903492' => 'ryTt6Qyb',     
'N1922893' => 'sJnt8DUx',     
'N1920392' => '6e5m6KQu',     
'N1943495' => 'jEPMBU6s',     
'N1915692' => '8ekkUuSW',     
'N1932693' => 'DwS23aTv',     
'N1903592' => 'eE7uLyEQ',     
'N1939394' => 'FgpT93c7',     
'N1922993' => 'QtVR2s3e',     
'N1925093' => 's8eUykh5',     
'N1926693' => 'yk9pbHsp',     
'N1903692' => 'Pz4uUdV5',     
'N1939494' => 't7uFCzPe',     
'N1903792' => '9s7TBma9',     
'N1930893' => 'pKsK9Mye',     
'N1915792' => 'X8tf7Rzb',     
'N1942095' => 'cnYz7F8T',     
'N1903892' => 'uwrQdF5b',     
'N1927893' => 'r8UWaHUk',     
'N1903992' => 'ShuY4Ye3',     
'N1927993' => 'r93rTB7E',     
'N1904192' => '7CLxpAqH',     
'N1904292' => 'Vkrbt3jm',     
'N1915892' => 'hdHq4BCU',     
'N1925193' => 'cnvDcn3D',     
'N1916092' => 'ENUcC4qb',     
'N1904592' => 'nEdEJ2yf',     
'N1928093' => '7EQSCfgf',     
'N1925293' => 'K7t4jKCK',     
'N1931093' => '9mFH28dQ',     
'N1937294' => '7p4yJt9b',     
'N1931293' => '6tLfAxz7',     
'N1923193' => '9YBPwtts',     
'N1943595' => '9LqKct9t',     
'N1916192' => 'rX548UVe',     
'N1934293' => 'hZnPWC7z',     
'N1935894' => '4JurvPXP',     
'N1940494' => 'V3pWXnGz',     
'N1920592' => 'FKHVc84K',     
'N1904892' => 'r2Nvc9CE',     
'N1928193' => 'eG57xxJz',     
'N1920692' => 'FXJrP47n',     
'N1916292' => '2sr3kDVQ',     
'N1926893' => 'M9ZdV9q4',     
'N1928293' => 'X8FqQwkZ',     
'N1943095' => '9DEjn9xu',     
'N1940594' => 'P3xY5E73',     
'N1916492' => 'kBqG5HbE',     
'N1905292' => 'Utbnh3Fr',     
'N1905392' => '6pq8TpnB',     
'N1905492' => '6QxNsC7f',     
'N1944495' => 'kVPH79eF',     
'N1940794' => '9HcGGfeT',     
'N1925493' => 'Xw2MJ3sC',     
'N1936094' => '3NebKX3s',     
'N1931393' => 'wup2UPUd',     
'N1920792' => 'retn2zGd',     
'N1905592' => 'rwLhz6GV',     
'N1905792' => 'wB989V4g',     
'N1937594' => 'GRM5bm5h',     
'N1925593' => 'zFQ6vpJg',     
'N1942195' => 'kSjULB2Q',     
'N1905992' => '4LLxE4Nv',     
'N1939594' => 'qg9nq7Ry',     
'N1906092' => 'ARt53X4j',     
'N1923293' => 'Vc44VzVV',     
'N1906192' => 'Un89eqvv',     
'N1916792' => '3U4LWUuy',     
'N1920892' => 'ct9XZMvC',     
'N1935694' => '7SXNxhsV',     
'N1906292' => 'd6zwZJ9f',     
'N1906492' => '6CGjJPDk',     
'N1923393' => 'qFWjL933',     
'N1937694' => 'dkUTA2yp',     
'N1928493' => '33AqJxKq',     
'N1928593' => '5kRj8tme',     
'N1906592' => 'aGGD2enH',     
'N1906692' => '8n9LGTB6',     
'N1916892' => 'vjUSfA9P',     
'N1906792' => '4tF6c2ka',     
'N1931493' => 'Tqn28K7t',     
'N1906892' => 'QLu8Vn2B',     
'N1937794' => 'dkFcHn5P',     
'N1928693' => 'rPFsY8Gd',     
'N1940894' => 'n6VuErpC',     
'N1906992' => '8G58pqf2',     
'N1943795' => 'UHH6PjWs',     
'N1925793' => 'js9FDmhH',     
'N1932793' => '8xjWDj5R',     
'N1916992' => 'JKcdP9MN',     
'N1920992' => 'VCD59nty',     
'N1943895' => 'k8PR2Fvz',     
'N1937894' => '5zc992SL',     
'N1913592' => '527vmFsM',     
'N1928793' => '4umcHbEW',     
'N1907092' => '9WZXe7Gw',     
'N1928893' => 'vB2MEBCv',     
'N1928993' => 'dLUz5ht2',     
'N1938894' => 'xY9x7pPj',     
'N1917192' => '5DUaFnuQ',     
'N1917292' => '7nRSjghr',     
'N1907192' => 'vgHAyT4C',     
'N1927093' => 'CqjMnx4F',     
'N1930193' => 'Q9kG4v5U',     
'N1907392' => 'sPhu44N7',     
'N1907492' => 'Uhm9dJ3W',     
'N1907592' => 'sxJP9zJb',     
'N1913692' => 'k7WB5Xst',     
'N1929093' => 'v6cCUy2D',     
'N1940994' => 'LZBv8tmM',     
'N1932893' => 'ELwD7fAB',     
'N1907692' => 'CjcQ6sXh',     
'N1936294' => 'a4jHt65W',     
'N1938194' => 'g7ymLuWx',     
'N1907792' => '33SeHpnf',     
'N1907892' => 'h4DQmK8P',     
'N1929193' => '6Fp9PZWe',     
'N1921192' => 's4UUvMM6',     
'N1907992' => 'pCc4RLvf',     
'N1929293' => 'R2u49yvE',     
'N1921292' => 'XStxb4PF',     
'N1917392' => 'Hpp2Nz34',     
'N1908192' => 'TJmZah28',     
'N1917492' => 'RNEbf7rE',     
'N1927193' => 'BNAms8yr',     
'N1929993' => 'Jh7UuRnL',     
'N1939694' => '5tGvqJRg',     
'N1934693' => 'yDCftv69',     
'N1908292' => 'p7PBNt6P',     
'N1908392' => 'dkBe89Ve',     
'N1917692' => '58vFHWV9',     
'N1908492' => 'kvY9VjPJ',     
'N1908592' => 'S47ugJFj',     
'N1908692' => 'caTKHn46',     
'N1941094' => 'QX6mA9CB',     
'N1908892' => 'zR6MJp4u',     
'N1923593' => '2e7MvXsJ',     
'N1917792' => '89wWZrpL',     
'N1921392' => 'SJmK8Rv6',     
'N1917992' => 'BXGvze8N',     
'N1932993' => 'kfxZk5Av',     
'N1908992' => 'ZDmPXv6b',     
'N1925893' => 'L7BqGBq4',     
'N1909092' => 'r8FecHLD',     
'N1931593' => '927yXVE9',     
'N1918092' => 'S6kQadfb',     
'N1934793' => 'j5b3Vjee',     
'N1918192' => 'Em2Ja9EY',     
'N1918292' => '8U6tKtLJ',     
'N1909192' => 'sDLzr8DP',     
'N1921492' => 'KHk7UbZa',     
'N1909292' => 'Yem3h8t2',     
'N1909392' => 'gqVn5W4G',     
'N1936394' => 'nF4Uwds8',     
'N1909492' => 'zsu4rhAL',     
'N1938994' => '3d77cVSW',     
'N1909692' => '28uYHUtj',     
'N1918492' => 'J8FC5vgA',     
'N1941194' => 'D53byhV3',     
'N1923793' => 'ePb799rH',     
'N1921592' => '2KUYCk8D',     
'N1909992' => 'zj4f7E7z',     
'N1925993' => 'Aak6j4fu',     
'N1926093' => 'ksFh3DF4',     
'N1913892' => 'Z2XZr7YG',     
'N1910092' => 'XkJ5E88C',     
'N1923993' => 'kKue4Pea',     
'N1938294' => 'KDn93j2e',     
'N1918692' => '5FZRyc4H',     
'N1939794' => '5knGfzmY',     
'N1910192' => 'JGe7AP8Z',     
'N1921792' => 'B5xNgJww',     
'N1936494' => 'vv36Vptr',     
'N1934893' => '2MQsR56A',     
'N1918792' => 'pnP6MhSQ',     
'N1910292' => '7z9GbSt3',     
'N1918892' => 'dnXVPF5c',     
'N1910392' => 'JC4heXjX',     
'N1918992' => 'NC9Ygywa',     
'N1921892' => 'jg2NFSta',     
'N1929393' => 'BTRR7Dc7',     
'N1919092' => 'h44KgKT3',     
'N1913992' => '5XqdR93P',     
'N1933593' => 'A8Ygcb5D',     
'N1929493' => 'ewYB6EML',     
'N1929593' => 'R9n7cFc7',     
'N1910592' => 'jg7Nbj5X',     
'N1919192' => '8fKzb63h',     
'N1910692' => 'A7WExjpJ',     
'N1910792' => '3NqZPepF',     
'N1919292' => 'zN9CW7XT',     
'N1910892' => 'mxLB3YB6',     
'N1911092' => 'BzDyT5CS',     
'N1943995' => 'RhM4hL4J',     
'N1938394' => '2WT9zrnL',     
'N1911292' => 'WCTyg2wg',     
'N1921992' => '3r4rKdXg',     
'N1944095' => 'Rx2L9ULd',     
'N1936594' => 'b3MA34bn',     
'N1911392' => 'n99JzTbu',     
'N1939894' => 'enX5fSfx',     
'N1938494' => 'keZ43ydJ',     
'N1924193' => 'YEGR5mMc',     
'N1942395' => 'dAUEF22e',     
'N1911492' => 'TVLt4sMn',     
'N1919392' => 'BHV5gbKY',     
'N1911592' => 'ZhV4kFtW',     
'N1926293' => '5xAfYFhg',     
'N1936794' => '4vjRQQMY',     
'N1942595' => 'wckE56RK',     
'N1911892' => 'Be5gv5pU',     
'N1929693' => '4Bem9YXY',     
'N1911992' => 'p5UCDt23',     
'N1912092' => 'dgrEVX77',     
'N1919492' => 'ayxL37zV',     
'N1919592' => '2KqXumtS',     
'N1940194' => 'TkGZb2PX',     
'N1936894' => 'ywR5XD3u',     
'N1942695' => 'e68XPzD5',     
'N1919692' => 'fTZ7FtmN',     
'N1934993' => 'dx9Qx8fF',     
'N1912192' => '8BUDHfPN',     
'N1912292' => 't638KMv2',     
'N1929793' => 'HhJH5RhN',     
'N1919792' => 'ZEyxX2wJ',     
'N1912392' => 'vv36Vptr',     
'N1932193' => 'SVS7J9kS',     
'N1944295' => '9797G5wz',     
'N1912592' => 'emq8GE4R',     
'N1912792' => 'EjpXFS57',     
'N1912992' => '5Z3tr2sp',     
'N1942795' => 'ZdmLc25F',     
'N1926393' => 'RmXaeB4a',     
'N1913092' => 'Qx4SSXET',     
'N1922092' => 'GbEbR83u',     
'N1922192' => 'sNYny44M',     
'N1919892' => 'e78YQruE',     
'N1913292' => '43dSpumq',     
'N1933293' => 'RG6fXgu9',     
'N1900192' => 'JA8Nhe4v',     
'N1900392' => 'Nf52p2zM',     
'N1900492' => 'BrLBA6mk',     
'N1900592' => 'qreXT7vg',     
'N1903712' => 'kxY6zvhd',     
'TANCH'    => 'MBfXZ3kx',     
'NGCY'     => 'n7c29YuB',     
'TANHH'    => 'ga75PHS9',     
'ARAD'     => 'DK68wdGs',     
'WONSY'    => 'M3ZsNK4S',     
'CHASY'    => 'm5RLUuWH',     
'MARD'     => 'Bxn9TKWK',     
'NGLL'     => 'vAc9TpDH',     
'WONTK'    => 'fZZ22rVe',     
'CHATS'    => 'sC878TdE',     
'HORFL'    => 'D4gtBqER',     
'GERL'     => 'dyUxYM3E',     
'ADET'     => 'm8v3MAkp',     
'PRAN'     => '6gJs6EVA',     
'THIAL'    => '2bS2D3DY',     
'PHOCP'    => 'M7g6KyUp',     
'DANC'     => 'm4QXYh4e',     
'CONL'     => 'Rb5PNnMr',     
'GERTZ'    => 'dyQ8Y3Jt',     
'ERIY'     => 'qfC9YQFL',     
'CORS'     => '5XhStyBV',     
'YONLY'    => 'fRthm9J6',     
'MCCY'     => 'M5rd2yQY',     
'SNEF'     => 'Gq7wV4yP',     
'ECDA'     => 'xatHp5me',     
'SLF'      => 'DR5aLjqW',     
'NIEC'     => 'e5EYGyjR',     
'SUSS'     => 'AWDrX4v8',     
'NTUCEA'   => 'mUL25seG',     
'NTUCEB'   => '2ghJMrSm',     
'N19UAT1'  => 'cvNKB7vK',     
'N19UAT2'  => '5m8ZNjMk',     
'N19UAT3'  => 'vv8rN5Eb',     
'N19UAT4'  => '4Wx2VnvJ',     
'N19UAT5'  => 'JVU7hP5H',     
'N19UAT6'  => 'K5LLt7sc',     
'N19UAT7'  => 'uMFAx65U',     
'N19UAT8'  => 'v8bQBKZb',     
'N19UAT9'  => 'hK3fnSpw',     
'N19UAT10' => 'ppcHX8Z5',     
'N19UAT11' => '7U4jtwSD',     
'N19UAT12' => '3Q6vtnC6',     
'N19UAT13' => 's32SPgtG',     
'N19UAT14' => 'w3EvC2Ts',     
'N19UAT15' => '3UvD5SWy',     
'N19UAT16' => 'uSd7gJaH',     
'N19UAT17' => 'xFLuMj9K',     
'N19UAT18' => 'T8MqntYt',     
'N19UAT19' => 'yrB4Psvh',     
'N19UAT20' => 'DyDgs3Hf',     
'N19UAT21' => '2Wfc5FaM',     
'N19UAT22' => '5sRKQyJK',     
'N19UAT23' => '9zVaBKxY',     
'N19UAT24' => 'hzP2YQEh',     
'N19UAT25' => 'zKEYg88d',     
'N19UAT26' => '42MBRSdM',     
'N19UAT27' => 'cunA8zNd',     
'N19UAT28' => '5eFZfCj9',     
'N19UAT29' => 'sq72CtQN',     
'N19UAT30' => 'UhW5BjzF'
);

/* Check and assign submitted Username and Password to new variable */$Username = isset($_POST['Username']) ? $_POST['Username'] : '';
$Password = isset($_POST['Password']) ? $_POST['Password'] : '';

/* Check Username and Password existence in defined array */if (isset($logins[$Username]) && $logins[$Username] == $Password){
/* Success: Set session variables and redirect to Protected page  */$_SESSION['UserData']['Username']=$logins[$Username];
header("location:postlogin.php");
exit;
} else {
/*Unsuccessful attempt: Set error message */$msg="<span style='color:red'>Invalid Login Details</span>";
}
}
?>
<html>
    <head>
        <meta charset="utf-8" />
        
        <title>login</title>
        
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
    <body id="top">
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
								<a class="hover-trans-05" href="login.html" title="">Financial Report <span class="bg pg-menu-link-img"></span></a>
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
		
		<div class="content-2-block" style="background: fixed url( 'images/login.png' ) center no-repeat; background-size: cover;">
			<div class="container postlogin postlogin-3">
				
				<h2>For Shareholder</h2>
				<div class="form-block">
					<form action "" method="post" name="Login_Form">
					     <?php if(isset($msg)){?><?php echo $msg;?>
					     <?php } ?></p>
			
						
						<p class="big-p">Username</p>
						<input type="Input" type="text" name="Username" />
						<p class="big-p">Password</p>
						<input name="Password" type="password" class="Input" />
						<p>Please login using the Username and Password which can be found in the letter that was mailed to your registered address.</p>
						<div class="clear margin-b-35"></div>
						<input class="hover-trans-05" name="Submit" type="submit" value="Login" />
					</form>
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
								<a href="login.html" title="">FINANCIAL REPORT <span class="close-img bg"></span></a>
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