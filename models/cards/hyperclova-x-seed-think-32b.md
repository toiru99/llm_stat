---
type: Model
title: HyperCLOVA X SEED Think (32B)
creator: Naver
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: 32
is_reasoning: true
radar:
  knowledge: { s: 36.8, z: -0.49, r: 42.7, estimated: false }  # 전문 지식
  reasoning: { s: 21.9, z: -0.66, r: 40.2, estimated: false }  # 추론
  coding: { s: 18.4, z: -0.76, r: 38.5, estimated: false }  # 코딩
  agentic: { s: 53.3, z: 0.22, r: 53.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 15.4, z: -1.3, r: 30.6, estimated: false }  # 긴문맥
  instruction: { s: 36.2, z: -0.59, r: 41.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — HyperCLOVA X SEED Think (32B)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# HyperCLOVA X SEED Think (32B)

Naver · Open · Small(32B) · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 42.7 | -0.49 | 실측 | [[gpqa-diamond]] 61.5152%×0.4, [[humanitys-last-exam]] 5.46803%×0.3 |
| 추론 | 40.2 | -0.66 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 61.5152%×1.0, [[humanitys-last-exam]] 5.46803%×1.0 |
| 코딩 | 38.5 | -0.76 | 실측 | [[terminal-bench]] 12.1212%×0.5 |
| 에이전트 | 53.2 | +0.22 | 실측 | [[tau2-bench]] 87.4269%×1.0, [[terminal-bench]] 12.1212%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.6 | -1.3 | 실측 | [[aa-lcr]] 13.6667%×1.0 |
| 지시 따르기 | 41.1 | -0.59 | 실측 | [[ifbench]] 37.8912%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
