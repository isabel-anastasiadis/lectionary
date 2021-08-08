docker run --rm --name lectionary-jupyter -p 8888:8888 -v c:\data\Lectionary\jupyter:/home/jovyan/work jupyter/base-notebook;

docker kill lectionary-jupyter;