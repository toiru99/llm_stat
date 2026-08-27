---
type: Model
title: Qwen3.6 35B A3B
creator: Alibaba
license: Open
intelligence_index: 32.0
price_blended_usd_1m: 0.5625
output_speed_tps: 122.0
context_window: 262000
status: current
size_class: Small
params_b: 36
is_reasoning: true
radar:
  knowledge: { s: 43.9, z: 0.12, r: 51.7, estimated: false }  # 전문 지식
  reasoning: { s: 42.0, z: 0.3, r: 54.4, estimated: false }  # 추론
  coding: { s: 57.7, z: 0.36, r: 55.4, estimated: false }  # 코딩
  agentic: { s: 52.1, z: 0.57, r: 58.5, estimated: false }  # 에이전트
  trust: { s: 54.7, z: 1.08, r: 66.2, estimated: false }  # 신뢰성
  multimodal: { s: 85.7, z: 0.63, r: 59.4, estimated: false }  # 멀티모달
  long_context: { s: 80.7, z: 0.89, r: 63.4, estimated: false }  # 긴문맥
  instruction: { s: 73.2, z: 0.76, r: 61.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 35B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Qwen3.6 35B A3B

Alibaba · Open · Small(36B) · 컨텍스트 262k · 종합지능 **32.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.38 · 출력 $2.25 · 혼합 $0.5625/1M · 122.0 t/s · TTFT 2.1s · 262k ctx` · 가성비 56.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.7 | +0.12 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 22.0%×0.3 |
| 추론 | 54.4 | +0.3 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 22.0%×1.0 |
| 코딩 | 55.4 | +0.36 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 35.0%×0.5 |
| 에이전트 | 58.5 | +0.57 | 실측 | [[gdpval]] 28.0%×1.0, [[tau2-bench]] 95.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 35.0%×1.0 |
| 신뢰성 | 66.2 | +1.08 | 실측 | [[aa-omniscience]] 49.0%×1.0 |
| 멀티모달 | 59.4 | +0.63 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 63.4 | +0.89 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 61.5 | +0.76 | 실측 | [[ifbench]] 64.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
