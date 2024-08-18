# Makefile for deploying web to GitHub Pages

BUILD_VERSION = 1.0.1
GITHUB_REPO = git@github.com:Karunanidi/portofolio.git


deploy-web:
	@echo "Deploying to git repository"
	git init && \
	git add . && \
	git commit -m "Deploy Version $(BUILD_VERSION)" && \
	git branch -M main && \
	git remote add origin $(GITHUB_REPO) && \
	git push -uf origin main

	@echo "Syncing git.."
	git pull
	git push 

	@echo "Finished Deploy!!"