---
type: Model
title: Ministral 3 8B
creator: Mistral
license: Open
intelligence_index: 9.0
price_blended_usd_1m: 0.15
output_speed_tps: 119.0
context_window: 256000
status: current
size_class: Small
params_b: 8
is_reasoning: false
radar:
  knowledge: { s: 21.2, z: -0.95, r: 35.8, estimated: false }  # 전문 지식
  reasoning: { s: 16.6, z: -0.9, r: 36.5, estimated: false }  # 추론
  coding: { s: 25.9, z: -0.88, r: 36.7, estimated: false }  # 코딩
  agentic: { s: 11.7, z: -0.96, r: 35.5, estimated: false }  # 에이전트
  trust: { s: 11.5, z: -0.79, r: 38.2, estimated: false }  # 신뢰성
  multimodal: { s: 44.3, z: -1.32, r: 30.2, estimated: false }  # 멀티모달
  long_context: { s: 31.6, z: -0.53, r: 42.0, estimated: false }  # 긴문맥
  instruction: { s: 23.9, z: -1.21, r: 31.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ministral 3 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-04
timestamp: 2026-08-04T00:00:00Z
---

# Ministral 3 8B

Mistral · Open · Small(8B) · 컨텍스트 256k · 종합지능 **9.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 신뢰성
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.15 · 출력 $0.15 · 혼합 $0.15/1M · 119.0 t/s · TTFT 0.76s · 256k ctx` · 가성비 60.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.8 | -0.95 | 실측 | [[aa-omniscience]] 11.0%×1.0, [[gpqa-diamond]] 47.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 36.5 | -0.9 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 47.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 36.7 | -0.88 | 실측 | [[scicode]] 21.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 35.5 | -0.96 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 27.0%×1.0, [[tau3-banking]] 4.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 38.2 | -0.79 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 30.2 | -1.32 | 실측 | [[mmmu-pro]] 46.0%×1.0 |
| 긴문맥 | 42.0 | -0.53 | 실측 | [[aa-lcr]] 24.0%×1.0 |
| 지시 따르기 | 31.9 | -1.21 | 실측 | [[ifbench]] 29.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
