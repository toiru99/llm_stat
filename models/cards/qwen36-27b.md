---
type: Model
title: Qwen3.6 27B
creator: Alibaba
license: Open
intelligence_index: 38.0
price_blended_usd_1m: 0.9
output_speed_tps: 49.0
context_window: 262000
status: current
size_class: Small
params_b: 27.8
is_reasoning: true
radar:
  knowledge: { s: 44.7, z: 0.2, r: 53.0, estimated: false }  # 전문 지식
  reasoning: { s: 42.7, z: 0.39, r: 55.9, estimated: false }  # 추론
  coding: { s: 60.7, z: 0.57, r: 58.6, estimated: false }  # 코딩
  agentic: { s: 56.9, z: 0.76, r: 61.3, estimated: false }  # 에이전트
  trust: { s: 50.5, z: 1.22, r: 68.3, estimated: false }  # 신뢰성
  multimodal: { s: 84.5, z: 0.69, r: 60.4, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 1.15, r: 67.2, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.08, r: 66.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 27B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Qwen3.6 27B

Alibaba · Open · Small(27.8B) · 컨텍스트 262k · 종합지능 **38.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.6 · 출력 $3.6 · 혼합 $0.9/1M · 49.0 t/s · TTFT 3.69s · 262k ctx` · 가성비 42.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.0 | +0.2 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 23.0%×0.3 |
| 추론 | 55.9 | +0.39 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 23.0%×1.0 |
| 코딩 | 58.6 | +0.57 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 35.0%×0.5 |
| 에이전트 | 61.3 | +0.76 | 실측 | [[gdpval]] 32.0%×1.0, [[tau2-bench]] 94.0%×1.0, [[tau3-banking]] 17.0%×1.0, [[terminal-bench]] 35.0%×1.0 |
| 신뢰성 | 68.3 | +1.22 | 실측 | [[aa-omniscience]] 51.0%×1.0 |
| 멀티모달 | 60.4 | +0.69 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 67.2 | +1.15 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 66.2 | +1.08 | 실측 | [[ifbench]] 68.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
