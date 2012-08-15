<?php
header('Content-Type: application/json');

$url = 'http://librarylab.law.harvard.edu/blog/feed/';

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

$contents = curl_exec ($ch);
	
curl_close ($ch);
	
$blog = new SimpleXMLElement($contents);

$items = $blog->channel->item;

$fields = array('title', 'link');
$json = array();

foreach($items as $item) {
   $title = (string) $item->title;
   $link = (string) $item->link;
   
   $data   = array($title, $link);
   $temp_array  = array_combine($fields, $data);
   array_push($json, $temp_array);    
}

echo '{"items": ' . json_encode($json) . '}'; 

?>