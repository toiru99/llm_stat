---
type: Model
title: Ministral 3 3B
creator: Mistral
license: Open
intelligence_index: 7.0
price_blended_usd_1m: 0.1
output_speed_tps: 215.0
context_window: 256000
status: current
size_class: Tiny
params_b: 3
is_reasoning: false
radar:
  knowledge: { s: 15.9, z: -1.19, r: 32.2, estimated: false }  # 전문 지식
  reasoning: { s: 12.8, z: -1.09, r: 33.6, estimated: false }  # 추론
  coding: { s: 15.6, z: -1.32, r: 30.2, estimated: false }  # 코딩
  agentic: { s: 8.8, z: -1.07, r: 33.9, estimated: false }  # 에이전트
  trust: { s: 20.9, z: -0.25, r: 46.3, estimated: false }  # 신뢰성
  multimodal: { s: 32.9, z: -1.88, r: 21.8, estimated: false }  # 멀티모달
  long_context: { s: 19.3, z: -0.91, r: 36.4, estimated: false }  # 긴문맥
  instruction: { s: 21.1, z: -1.34, r: 29.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ministral 3 3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-09
timestamp: 2026-08-09T00:00:00Z
---

# Ministral 3 3B

Mistral · Open · Tiny(3B) · 컨텍스트 256k · 종합지능 **7.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.1 · 출력 $0.1 · 혼합 $0.1/1M · 215.0 t/s · TTFT 0.6s · 256k ctx` · 가성비 70.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.2 | -1.19 | 실측 | [[aa-omniscience]] 9.0%×1.0, [[gpqa-diamond]] 36.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 33.6 | -1.09 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 36.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 30.2 | -1.32 | 실측 | [[scicode]] 14.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 33.9 | -1.07 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 25.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 46.3 | -0.25 | 실측 | [[aa-omniscience]] 20.0%×1.0 |
| 멀티모달 | 21.8 | -1.88 | 실측 | [[mmmu-pro]] 38.0%×1.0 |
| 긴문맥 | 36.4 | -0.91 | 실측 | [[aa-lcr]] 16.0%×1.0 |
| 지시 따르기 | 29.9 | -1.34 | 실측 | [[ifbench]] 27.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
