---
type: Model
title: Granite 4.1 8B
creator: IBM
license: Open
intelligence_index: 1.0
price_blended_usd_1m: 0.055
output_speed_tps: 110.0
context_window: 131000
status: current
size_class: Small
params_b: 8
is_reasoning: false
radar:
  knowledge: { s: 20.5, z: -0.99, r: 35.2, estimated: false }  # 전문 지식
  reasoning: { s: 14.5, z: -0.99, r: 35.2, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.12, r: 33.2, estimated: false }  # 코딩
  agentic: { s: 14.1, z: -0.89, r: 36.6, estimated: false }  # 에이전트
  trust: { s: 11.3, z: -0.62, r: 40.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 14.6, z: -1.06, r: 34.1, estimated: false }  # 긴문맥
  instruction: { s: 38.0, z: -0.61, r: 40.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.1 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Granite 4.1 8B

IBM · Open · Small(8B) · 컨텍스트 131k · 종합지능 **1.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 신뢰성
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $0.05 · 출력 $0.1 · 혼합 $0.055/1M · 110.0 t/s · TTFT 0.81s · 131k ctx` · 가성비 18.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.2 | -0.99 | 실측 | [[aa-omniscience]] 12.0%×1.0, [[gpqa-diamond]] 43.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 35.2 | -0.99 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 43.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 33.2 | -1.12 | 실측 | [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 36.6 | -0.89 | 실측 | [[tau2-bench]] 28.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 40.7 | -0.62 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.1 | -1.06 | 실측 | [[aa-lcr]] 13.0%×1.0 |
| 지시 따르기 | 40.8 | -0.61 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
