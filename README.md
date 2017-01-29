# benny-hill-x
Play the Benny Hill theme for x (default 5) seconds after running another command

inspiration comes from the [`benny-hill`](https://www.npmjs.com/package/benny-hill) module from [@mafintosh](https://www.npmjs.com/~mafintosh)

# usage

```
npm install -g benny-hill-x

benny-hill-x # just play benny hill for 5 seconds
benny-hill-x sleep 10 # wait for 10 seconds, then play benny hill for 5 seconds
benny-hill-x 2 make # after compiling, play benny hill for 2 seconds
benny-hill-x 8 npm install -g dat # after installing node modules, play benny hill for 8 seconds
```

## Linux users

Make sure to install the following dependencies first if you are on linux

```
sudo apt-get install sox libsox-fmt-mp3
```

## License

MIT
