---
layout: page
title: Image Viewer
permalink: /imageviewer/
---
<script src="{{site.url}}{{site.baseurl}}/latest/annona.js"></script>
<link rel="stylesheet" type="text/css" href="{{site.url}}{{site.baseurl}}/latest/annona.css">
<style>
code {
  word-wrap: break-word;
  white-space: normal;
}
</style>

* A markdown unordered list which will be replaced with the ToC, excluding the "Contents header" from above
{:toc}

# Props

| Props      | Values |
| ----------- | ----------- |
| annotationurl | Annotation url.|
| annotationlist | **This has been moved to annotationurl.** ListAnnotation or PageAnnotation. See "@type" or "type" in annotation. i.e. [https://dnoneill.github.io/annotate/annotations/segins-004-list.json](https://dnoneill.github.io/annotate/annotations/segins-004-list.json) |
| manifesturl | iiif manifest url, only required when annotation does not contain manifest |
| styling | string structured styling. See [settings table](#settings) for more options |


# Getting started
In order to create any of the viewers listed on the website the following code needs to be added to an HTML file once.


```
<script src="{{site.url}}{{site.baseurl}}/dist/annona.js"></script>
<link rel="stylesheet" type="text/css" href="{{site.url}}{{site.baseurl}}/dist/annona.css">
```

Note: the annona.js and annona.css need to be loaded only once, no matter how many image viewers are loaded. Multiple image viewers can be loaded on one page with the `<iiif-storyboard>` tag. An example of this can be seen here: [annotations](https://dnoneill.github.io/annotate/annotations).

## Building views
From there any of the tags built through the [Tag Builder]({{site.baseurl}}/tools/#/tag-builder/) or manually can be entered into a webpage. The Tag Builder provides a user interface for creating much of the code documented below. It also has all settings built into the interface.

# Single Annotation

```
<iiif-annotation annotationurl="{{site.url}}{{site.baseurl}}/webannotations/annotation1.json"></iiif-annotation>

```

<iiif-annotation annotationurl="{{site.baseurl}}/webannotations/annotation1.json"></iiif-annotation>

# Annotation example
```
<iiif-annotation annotationurl="https://dnoneill.github.io/annotate/annotations/segins-004-list.json"></iiif-annotation>
```

<iiif-annotation annotationurl="https://dnoneill.github.io/annotate/annotations/segins-004-list.json"></iiif-annotation>

# Annotations without Manifests listed in annotation
The following example is a annotation list. The annotation list does not have a manifest in the annotation. The manifest is added manually into to the tag.
```
<iiif-annotation annotationurl="https://dzkimgs.l.u-tokyo.ac.jp/iiif/zuzoubu/12b02/list/p0001-0025.json" manifesturl="https://dzkimgs.l.u-tokyo.ac.jp/iiif/zuzoubu/12b02/manifest.json"></iiif-annotation>
```

<iiif-annotation annotationurl="https://dzkimgs.l.u-tokyo.ac.jp/iiif/zuzoubu/12b02/list/p0001-0025.json" manifesturl="https://dzkimgs.l.u-tokyo.ac.jp/iiif/zuzoubu/12b02/manifest.json"></iiif-annotation>

# Annotations with Multiple languages
W3 standards allow for transitions between multiple bodies [https://www.w3.org/TR/annotation-model/#choice-between-bodies](https://www.w3.org/TR/annotation-model/#choice-between-bodies). The assumption is only body is used at a time. This library supports this model. The assumption this library uses is that the changes are between different languages which are defined in ISO standard in the annotation. An example of this can be seen in the annotation below.

<iiif-annotation annotationurl="{{site.url}}{{site.baseurl}}/webannotations/annotationslist.json"></iiif-annotation>

# Settings

What areas are shown in the embedded image are customizable either through settings or through basic css. Below are the setting options and their values. An example with all settings enabled can be seen here: [all settings]({{site.baseurl}}/imageviewer_settings). This can also be applied to a single annotation.

<script src="{{site.url}}{{site.baseurl}}/tools/js/settings.js"></script>
<annona-settings type="iiifannotation"></annona-settings> 

## Global settings
Item here: [all settings example]({{site.baseurl}}/imageviewer_settings)

```
<script src="{{site.url}}{{site.baseurl}}/dist/annona.js"></script>
<link rel="stylesheet" type="text/css" href="{{site.url}}{{site.baseurl}}/dist/annona.css">
<script id="config" type="application/json">{
  "hide_viewlarger":true,
  "view_full_object":true,
  "hide_tags": true,
  "height": "200"
}</script>
<iiif-annotation annotationurl="https://dzkimgs.l.u-tokyo.ac.jp/iiif/zuzoubu/12b02/list/p0001-0025.json" manifesturl="https://dzkimgs.l.u-tokyo.ac.jp/iiif/zuzoubu/12b02/manifest.json"></iiif-annotation>
```

## Single annotation settings

### Image Only
```
<iiif-annotation annotationurl='https://dzkimgs.l.u-tokyo.ac.jp/iiif/zuzoubu/12b02/list/p0001-0025.json' manifesturl='https://dzkimgs.l.u-tokyo.ac.jp/iiif/zuzoubu/12b02/manifest.json' styling='image_only:true; width:200'></iiif-annotation>
```

<iiif-annotation annotationurl='https://dzkimgs.l.u-tokyo.ac.jp/iiif/zuzoubu/12b02/list/p0001-0025.json' manifesturl='https://dzkimgs.l.u-tokyo.ac.jp/iiif/zuzoubu/12b02/manifest.json' styling='image_only:true; width:200'></iiif-annotation>

### Text only

```
<iiif-annotation annotationurl='https://wellcomelibrary.org/iiif/b18020446/contentAsText/10' styling='text_only:true'></iiif-annotation>
```

<iiif-annotation annotationurl='https://wellcomelibrary.org/iiif/b18020446/contentAsText/10' styling='text_only:true'></iiif-annotation>

### Rendering multiple annotations
The example show on the [multitext page]({{site.baseurl}}/multipage) can be done with any set of annotations and any set of settings. This is a simple JavaScript application. The reason we are showing an application with text only is it is a good example of one of the many ways this application can be used.
