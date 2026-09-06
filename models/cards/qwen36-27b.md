---
type: Model
title: Qwen3.6 27B
creator: Alibaba
license: Open
intelligence_index: 29.0
price_blended_usd_1m: 0.9
output_speed_tps: 57.0
context_window: 262000
status: current
size_class: Small
params_b: 27.8
is_reasoning: true
radar:
  knowledge: { s: 44.5, z: 0.17, r: 52.6, estimated: false }  # 전문 지식
  reasoning: { s: 42.4, z: 0.35, r: 55.3, estimated: false }  # 추론
  coding: { s: 53.0, z: 0.73, r: 60.9, estimated: false }  # 코딩
  agentic: { s: 56.7, z: 0.74, r: 61.0, estimated: false }  # 에이전트
  trust: { s: 50.5, z: 1.23, r: 68.4, estimated: false }  # 신뢰성
  multimodal: { s: 83.3, z: 0.65, r: 59.8, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 1.15, r: 67.3, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.09, r: 66.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 27B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Qwen3.6 27B

Alibaba · Open · Small(27.8B) · 컨텍스트 262k · 종합지능 **29.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.6 · 출력 $3.6 · 혼합 $0.9/1M · 57.0 t/s · TTFT 3.67s · 262k ctx` · 가성비 32.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.6 | +0.17 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 23.0%×0.3 |
| 추론 | 55.3 | +0.35 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 23.0%×1.0 |
| 코딩 | 60.9 | +0.73 | 실측 | [[terminal-bench]] 35.0%×0.5 |
| 에이전트 | 61.0 | +0.74 | 실측 | [[gdpval]] 29.0%×1.0, [[tau2-bench]] 94.0%×1.0, [[tau3-banking]] 17.0%×1.0, [[terminal-bench]] 35.0%×1.0 |
| 신뢰성 | 68.4 | +1.23 | 실측 | [[aa-omniscience]] 51.0%×1.0 |
| 멀티모달 | 59.8 | +0.65 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 67.3 | +1.15 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 66.4 | +1.09 | 실측 | [[ifbench]] 68.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
