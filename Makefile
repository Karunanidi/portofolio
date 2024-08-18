# Makefile for deploying web to GitHub Pages

BUILD_VERSION = 1.0.2
GITHUB_REPO = git@github.com:Karunanidi/portofolio.git


deploy-web:
	@echo "Deploying to git repository"
	git init && \
	git add . && \
	git commit -m "Deploy Version $(BUILD_VERSION)" && \
	git branch -M main && \
	git push -uf origin main 

	@echo "Syncing git.."
	git pull && \
	git push 

	@echo "Finished Deploy!! $(BUILD_VERSION)"