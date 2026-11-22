---
type: Model
title: Motif-2-12.7B
creator: Motif Technologies
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 44.0, z: -0.16, r: 47.6, estimated: false }  # 전문 지식
  reasoning: { s: 26.5, z: -0.45, r: 43.3, estimated: false }  # 추론
  coding: { s: 5.7, z: -1.16, r: 32.5, estimated: false }  # 코딩
  agentic: { s: 26.3, z: -0.64, r: 40.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 16.5, z: -1.1, r: 33.5, estimated: false }  # 긴문맥
  instruction: { s: 63.0, z: 0.38, r: 55.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Motif-2-12.7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Motif-2-12.7B

Motif Technologies · Proprietary · Small · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.6 | -0.16 | 실측 | [[gpqa-diamond]] 69.4949494949495%×0.4, [[humanitys-last-exam]] 8.758109360518999%×0.3 |
| 추론 | 43.3 | -0.45 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 69.4949494949495%×1.0, [[humanitys-last-exam]] 8.758109360518999%×1.0 |
| 코딩 | 32.5 | -1.16 | 실측 | [[terminal-bench]] 3.78787878787879%×0.5 |
| 에이전트 | 40.4 | -0.64 | 실측 | [[tau2-bench]] 46.4912280701754%×1.0, [[terminal-bench]] 3.78787878787879%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.5 | -1.1 | 실측 | [[aa-lcr]] 14.6666666666667%×1.0 |
| 지시 따르기 | 55.7 | +0.38 | 실측 | [[ifbench]] 57.0068027210884%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
