---
type: Model
title: Qwen3.6 35B A3B
creator: Alibaba
license: Open
intelligence_index: 32.0
price_blended_usd_1m: None
output_speed_tps: 154.0
context_window: 262000
status: current
size_class: Small
params_b: 36
is_reasoning: true
radar:
  knowledge: { s: 44.8, z: 0.2, r: 53.0, estimated: false }  # 전문 지식
  reasoning: { s: 41.5, z: 0.41, r: 56.1, estimated: false }  # 추론
  coding: { s: 57.7, z: 0.47, r: 57.1, estimated: false }  # 코딩
  agentic: { s: 55.4, z: 0.74, r: 61.1, estimated: false }  # 에이전트
  trust: { s: 56.3, z: 1.36, r: 70.4, estimated: false }  # 신뢰성
  multimodal: { s: 87.0, z: 0.72, r: 60.8, estimated: false }  # 멀티모달
  long_context: { s: 84.2, z: 1.04, r: 65.7, estimated: false }  # 긴문맥
  instruction: { s: 73.2, z: 0.84, r: 62.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 35B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-24
timestamp: 2026-07-24T00:00:00Z
---

# Qwen3.6 35B A3B

Alibaba · Open · Small(36B) · 컨텍스트 262k · 종합지능 **32.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.25 · 출력 $1.49 · 혼합 $None/1M · 154.0 t/s · TTFT 2.29s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.0 | +0.2 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 20.0%×0.3 |
| 추론 | 56.1 | +0.41 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 20.0%×1.0 |
| 코딩 | 57.1 | +0.47 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 35.0%×0.5 |
| 에이전트 | 61.1 | +0.74 | 실측 | [[gdpval]] 28.0%×1.0, [[tau2-bench]] 95.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 35.0%×1.0 |
| 신뢰성 | 70.4 | +1.36 | 실측 | [[aa-omniscience]] 50.0%×1.0 |
| 멀티모달 | 60.8 | +0.72 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 65.7 | +1.04 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 62.6 | +0.84 | 실측 | [[ifbench]] 64.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
