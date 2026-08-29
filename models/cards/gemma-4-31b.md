---
type: Model
title: Gemma 4 31B
creator: Google
license: Open
intelligence_index: 30.0
price_blended_usd_1m: 0
output_speed_tps: 36.0
context_window: 256000
status: current
size_class: Small
params_b: 30.7
is_reasoning: true
radar:
  knowledge: { s: 46.7, z: 0.3, r: 54.4, estimated: false }  # 전문 지식
  reasoning: { s: 45.0, z: 0.53, r: 58.0, estimated: false }  # 추론
  coding: { s: 66.0, z: 0.77, r: 61.5, estimated: false }  # 코딩
  agentic: { s: 46.9, z: 0.39, r: 55.9, estimated: false }  # 에이전트
  trust: { s: 13.4, z: -0.5, r: 42.5, estimated: false }  # 신뢰성
  multimodal: { s: 82.9, z: 0.58, r: 58.7, estimated: false }  # 멀티모달
  long_context: { s: 81.9, z: 1.0, r: 65.0, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.59, r: 73.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 31B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Gemma 4 31B

Google · Open · Small(30.7B) · 컨텍스트 256k · 종합지능 **30.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 36.0 t/s · TTFT 1.05s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.4 | +0.3 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 24.0%×0.3 |
| 추론 | 58.0 | +0.53 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 24.0%×1.0 |
| 코딩 | 61.5 | +0.77 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 55.9 | +0.39 | 실측 | [[gdpval]] 16.0%×1.0, [[itbench]] 37.0%×1.0, [[tau2-bench]] 60.0%×1.0, [[tau3-banking]] 15.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 42.5 | -0.5 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | 58.7 | +0.58 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 65.0 | +1.0 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 73.8 | +1.59 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
