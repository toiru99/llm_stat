---
type: Model
title: Gemma 4 31B
creator: Google
license: Open
intelligence_index: 30.0
price_blended_usd_1m: 0.168
output_speed_tps: 35.0
context_window: 256000
status: current
size_class: Small
params_b: 30.7
is_reasoning: false
radar:
  knowledge: { s: 46.0, z: 0.22, r: 53.3, estimated: false }  # 전문 지식
  reasoning: { s: 45.0, z: 0.44, r: 56.7, estimated: false }  # 추론
  coding: { s: 66.0, z: 0.7, r: 60.5, estimated: false }  # 코딩
  agentic: { s: 46.8, z: 0.36, r: 55.4, estimated: false }  # 에이전트
  trust: { s: 15.1, z: -0.58, r: 41.4, estimated: false }  # 신뢰성
  multimodal: { s: 82.9, z: 0.49, r: 57.3, estimated: false }  # 멀티모달
  long_context: { s: 81.9, z: 0.93, r: 63.9, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.45, r: 71.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 31B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Gemma 4 31B

Google · Open · Small(30.7B) · 컨텍스트 256k · 종합지능 **30.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0.168/1M · 35.0 t/s · TTFT 1.06s · 256k ctx` · 가성비 178.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.3 | +0.22 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 24.0%×0.3 |
| 추론 | 56.7 | +0.44 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 24.0%×1.0 |
| 코딩 | 60.5 | +0.7 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 55.4 | +0.36 | 실측 | [[gdpval]] 16.0%×1.0, [[itbench]] 37.0%×1.0, [[tau2-bench]] 60.0%×1.0, [[tau3-banking]] 15.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 41.4 | -0.58 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | 57.3 | +0.49 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 63.9 | +0.93 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 71.8 | +1.45 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
