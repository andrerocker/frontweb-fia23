run:
	python util/server.py

deploy:
	aws s3 sync . s3://alexafia/
