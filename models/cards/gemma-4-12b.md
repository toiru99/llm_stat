---
type: Model
title: Gemma 4 12B
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262144
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 51.8, z: 0.23, r: 53.4, estimated: false }  # 전문 지식
  reasoning: { s: 31.9, z: -0.17, r: 47.4, estimated: false }  # 추론
  coding: { s: 27.6, z: -0.41, r: 43.8, estimated: false }  # 코딩
  agentic: { s: 33.7, z: -0.38, r: 44.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 73.8, z: 0.13, r: 51.9, estimated: false }  # 멀티모달
  long_context: { s: 71.8, z: 0.55, r: 58.2, estimated: false }  # 긴문맥
  instruction: { s: 86.2, z: 1.36, r: 70.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 12B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Gemma 4 12B

Google · Open · Small · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.4 | +0.23 | 실측 | [[gpqa-diamond]] 75.2525252525252%×0.4, [[humanitys-last-exam]] 15.6626506024096%×0.3 |
| 추론 | 47.4 | -0.17 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 75.2525252525252%×1.0, [[humanitys-last-exam]] 15.6626506024096%×1.0 |
| 코딩 | 43.8 | -0.41 | 실측 | [[terminal-bench]] 18.181818181818198%×0.5 |
| 에이전트 | 44.3 | -0.38 | 실측 | [[gdpval]] 434.79%×1.0, [[tau2-bench]] 36.2573099415205%×1.0, [[terminal-bench]] 18.181818181818198%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.9 | +0.13 | 실측 | [[mmmu-pro]] 69.6531791907514%×1.0 |
| 긴문맥 | 58.2 | +0.55 | 실측 | [[aa-lcr]] 63.66666666666671%×1.0 |
| 지시 따르기 | 70.4 | +1.36 | 실측 | [[ifbench]] 73.5374149659864%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
