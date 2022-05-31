<link href='https://fonts.googleapis.com/css?family=Nosifer|League+Script|Yellowtail|Permanent+Marker|Codystar|Eater|Molle:400italic|Snowburst+One|Shojumaru|Frijole|Gloria+Hallelujah|Calligraffitti|Tangerine|Monofett|Monoton|Arbutus|Chewy|Playball|Black+Ops+One|Rock+Salt|Pinyon+Script|Orbitron|Sacramento|Sancreek|Kranky|UnifrakturMaguntia|Creepster|Pirata+One|Seaweed+Script|Miltonian|Herr+Von+Muellerhoff|Rye|Jacques+Francois+Shadow|Montserrat+Subrayada|Akronim|Faster+One|Megrim|Cedarville+Cursive|Ewert|Plaster' rel='stylesheet' type='text/css'>

<link href="tdesignAPI/css/api.css" rel="stylesheet">
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">

<script type="text/javascript" src="tdesignAPI/js/html2canvas.js"></script>

<script src="tdesignAPI/js/jquery.form.js"></script>
<script src="tdesignAPI/js/mainapp.js"></script>
<link rel="stylesheet" href="tdesignAPI/css/jquery-ui.css" />
<script src="tdesignAPI/js/jquery-ui.js"></script>

<script type="text/javascript">
	function changeval() {
		$total = parseInt($("#small").val()) + parseInt($("#medium").val()) + parseInt($("#large").val()) + parseInt($("#xlarge").val()) + parseInt($("#xxlarge").val());
		//alert($total);
		$('.small').val($("#small").val());
		$('.medium').val($("#medium").val());
		$('.large').val($("#large").val());
		$('.xlarge').val($("#xlarge").val());
		$('.xxlarge').val($("#xxlarge").val());
		$('.total').val($total);
	}

	function changeval2() {
		$total = parseInt($("#small2").val()) + parseInt($("#medium2").val()) + parseInt($("#large2").val()) + parseInt($("#xlarge2").val()) + parseInt($("#xxlarge2").val());
		//alert($total);
		$('.small').val($("#small2").val());
		$('.medium').val($("#medium2").val());
		$('.large').val($("#large2").val());
		$('.xlarge').val($("#xlarge2").val());
		$('.xxlarge').val($("#xxlarge2").val());
		$('.total').val($total);
	}

	function b() {
		$('#custom_text').toggleClass('bold_text');
		$("#bold_button").toggleClass('box-shadow', '0 0 10px inset #3c3c3c');
	}

	function i() {
		$('#custom_text').toggleClass('italic_text');
	}

	function changeFont(_name) {
		$('#custom_text').css("font-family", _name);
	}

	function changeFontSize(_size) {
		$('#custom_text').css("font-size", _size);
	}

	function changeColor(_color) {
		$('#custom_text').css("color", _color);
	}
</script>
<div class="container design_api_container">
	<div class="logo">
		<img class="logo-image" src="tdesignAPI/images/logo-smartven.png" alt="logo-smartven">
	</div>
	<div class="row">
		<!-- Side -->
		<div class="col-md-4">
			<h3>Kreasikan Vending Machine Anda!</h3>
			<p class="upload-info">Ini adalah mock up simulasi <i>custom sticker</i> pada Vending Machine yang Anda inginkan.</p>
			<h5>Tipe</h5>
			<div class="custom-select">
				<select name="vending-select" id="vending-select">
					<option value="smartven_analog">Smartven Analog</option>
					<option value="smartven_22">Smartven 22</option>
					<option value="smartven_49">Smartven 49</option>
				</select>
			</div>
			<div>
				<form id="form1" runat="server">
					<span class="btn btn-file btn-upload" id="unggah_depan">
						<img src="tdesignAPI/images/icons/icon_unggah.png" class="btn-upload-icon" alt="Icon Unggah">
						Gambar Depan
						<input type='file' id="imgInp" accept=".jpg,.jpeg,.png" onchange="validateFileType()" />
					</span>
				</form>
				<form id="form2" runat="server">
					<span class="btn btn-file btn-upload" id="unggah_samping">
						<img src="tdesignAPI/images/icons/icon_unggah.png" class="btn-upload-icon" alt="Icon Unggah">
						Gambar Samping
						<input type='file' id="imgInp2" accept=".jpg,.jpeg,.png" onchange="validateFileType()" />
					</span>
				</form>
			</div>
			<p class="upload-info" style="margin-top: 20px;">Disarankan untuk mengunggah gambar dengan ukuran <b>310 x 430 pixel</b> untuk tampilan depan dan <b>240 x 430 pixel</b> untuk tampilan samping.</p>
			<button class="btn-refresh-page" onClick="window.location.href=window.location.href">
				<img src="tdesignAPI/images/icons/icon_reset.png" alt="Icon Reset">
				<br>
				Atur Ulang
			</button>
		</div>
		
		<!-- Main -->
		<div class="col-md-4 main-side">
			<div class='design_api' id="design_api">
				<div id='preview_t'>
					<div id="preview_front">
						<div class="front_print">

						</div>
					</div>
					<div id="preview_side">
						<div class="side_print">

						</div>
					</div>

				</div>
			</div>

			<!-- Switch Button -->
			<h1 class="preview-title">Tampak Depan</h1>
			<center>
			<div class="switch-button" id="switch-button">
				<input class="switch-button-checkbox" type="checkbox"></input>
				<label class="switch-button-label" for=""><span class="switch-button-label-span">Depan</span></label>
			</div>
			</center>
			<!-- End Switch Button -->
		</div>
		
		<!-- Right -->
		<div class="col-md-4 right-side">
			<button type="button" class="btn-preview-images preview_images" id="preview_images" data-toggle="modal" data-target=".bs-example-modal-lg">
					<img src="tdesignAPI/images/icons/icon_tinjau.png" alt="Icon Tinjau">
					Pratinjau 
			</button>
			<p style="color: red; margin-top: 5px" id="error_tinjau"></p>

			<button class="btn-refresh-page-two" onClick="window.location.href=window.location.href">
				Atur Ulang
			</button>
		</div>
	</div>

	<div class="layer">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close close_img" data-dismiss="modal">
					<span aria-hidden="true">&times;</span><span class="sr-only close_img">Close</span>
				</button>
				<h4 class="modal-title">Pratinjau Custom Vending</h4>
			</div>
			<div class="modal-body">

				<div id="image_reply"></div>
				<div style="display: flex; justify-content: center;" id="image_reply_desc">
					<h3 style="margin-right: 25%;">Tampak Depan</h3>
					<h3>Tampak Samping</h3>
				</div>
				<div class="modal-footer">
					<div class="row">
						<form method="POST" enctype="multipart/form-data" id="imageFileForm" action="checkout/checkout.php">
							<div class="col-md-1">
								<button type="button" class="btn btn-danger close_img" data-dismiss="modal">
									Kembali
								</button>
							</div>
						</form>

					</div>
				</div>
			</div>

		</div>
	</div>

</div>
<script>
	function readURL(input, val) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function(e) {
				//Initiate the JavaScript Image object.
				var image = new Image();

				//Set the Base64 string return from FileReader as source.
				image.src = e.target.result;

				//Validate the File Height and Width.
				image.onload = function () {
					var height = this.height;
					var width = this.width;
					if (val == 'imgInp1') {
						if (height > 430 || width > 310) {
							Swal.fire({
								title: 'Lanjutkan Upload?',
								text: "Gambar yang anda unggah akan disesuaikan karena lebih besar dari ukuran yang disarankan",
								type: 'warning',
								showCancelButton: true,
								confirmButtonColor: '#3085d6',
								cancelButtonColor: '#d33',
								confirmButtonText: 'Yes, upload it!'
							}).then((result) => {
								if (result.value) {
									image_icon(e.target.result);
									keepOnTop();
									Swal.fire(
										'Uploaded!',
										'Gambar anda berhasil diunggah.',
										'success'
									)
								}
							})
							return true;
						} else if (height < 430 || width < 310) {
							Swal.fire({
								type: 'error',
								title: 'Oops...',
								text: 'Ukuran gambar yang anda unggah terlalu kecil dari ukuran yang disarankan!',
							});
							return false;
						}
					} else {
						if (height > 430 || width > 240) {
							Swal.fire({
								title: 'Lanjutkan Upload?',
								text: "Gambar yang anda unggah akan disesuaikan karena lebih besar dari ukuran yang disarankan",
								type: 'warning',
								showCancelButton: true,
								confirmButtonColor: '#3085d6',
								cancelButtonColor: '#d33',
								confirmButtonText: 'Yes, upload it!'
							}).then((result) => {
								if (result.value) {
									image_icon(e.target.result);
									keepOnTop();
									Swal.fire(
										'Uploaded!',
										'Gambar anda berhasil diunggah.',
										'success'
									)
								}
							})
							return true;
						} else if (height < 430 || width < 240) {
							Swal.fire({
								type: 'error',
								title: 'Oops...',
								text: 'Ukuran gambar yang anda unggah terlalu kecil dari ukuran yang disarankan!',
							});
							return false;
						}
					}
					Swal.fire(
						'Uploaded!',
						'Gambar anda berhasil diunggah.',
						'success'
					)
					image_icon(e.target.result);
					keepOnTop();
				};
			}
			reader.readAsDataURL(input.files[0]);
		}
	}

	$("#imgInp").change(function() {
		readURL(this, value = 'imgInp1');
	});

	$("#imgInp2").change(function() {
		readURL(this, value = 'imgInp2');
	});
</script>

