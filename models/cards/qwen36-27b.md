---
type: Model
title: Qwen3.6 27B
creator: Alibaba
license: Open
intelligence_index: 38.0
price_blended_usd_1m: 0.9
output_speed_tps: 56.0
context_window: 262000
status: current
size_class: Small
params_b: 27.8
is_reasoning: true
radar:
  knowledge: { s: 45.4, z: 0.22, r: 53.3, estimated: false }  # 전문 지식
  reasoning: { s: 44.0, z: 0.45, r: 56.8, estimated: false }  # 추론
  coding: { s: 62.1, z: 0.61, r: 59.2, estimated: false }  # 코딩
  agentic: { s: 57.3, z: 0.85, r: 62.7, estimated: false }  # 에이전트
  trust: { s: 57.0, z: 1.41, r: 71.2, estimated: false }  # 신뢰성
  multimodal: { s: 85.7, z: 0.67, r: 60.0, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 1.17, r: 67.5, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.04, r: 65.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 27B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# Qwen3.6 27B

Alibaba · Open · Small(27.8B) · 컨텍스트 262k · 종합지능 **38.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.6 · 출력 $3.6 · 혼합 $0.9/1M · 56.0 t/s · TTFT 3.8s · 262k ctx` · 가성비 42.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.3 | +0.22 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 23.0%×0.3 |
| 추론 | 56.8 | +0.45 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 23.0%×1.0 |
| 코딩 | 59.2 | +0.61 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 35.0%×0.5 |
| 에이전트 | 62.7 | +0.85 | 실측 | [[gdpval]] 32.0%×1.0, [[tau2-bench]] 94.0%×1.0, [[tau3-banking]] 17.0%×1.0, [[terminal-bench]] 35.0%×1.0 |
| 신뢰성 | 71.2 | +1.41 | 실측 | [[aa-omniscience]] 51.0%×1.0 |
| 멀티모달 | 60.0 | +0.67 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 67.5 | +1.17 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 65.6 | +1.04 | 실측 | [[ifbench]] 68.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
