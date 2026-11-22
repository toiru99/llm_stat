---
type: Model
title: Qwen3 32B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.195
output_speed_tps: 118.4598569459647
context_window: 32768
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 30.7, z: -0.8, r: 38.0, estimated: false }  # 전문 지식
  reasoning: { s: 27.4, z: -0.41, r: 43.9, estimated: false }  # 추론
  coding: { s: 12.8, z: -0.93, r: 36.1, estimated: true }  # 코딩
  agentic: { s: 24.2, z: -0.72, r: 39.2, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.59, r: 26.1, estimated: false }  # 긴문맥
  instruction: { s: 27.2, z: -1.12, r: 33.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 32B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Qwen3 32B (non-reasoning)

Alibaba · Open · Small · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.195/1M · 118.4598569459647 t/s · TTFT 0.8253280966333275s · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.0 | -0.8 | 실측 | [[gpqa-diamond]] 53.5353535353535%×0.4, [[humanitys-last-exam]] 4.130000000000001%×0.3 |
| 추론 | 43.9 | -0.41 | 실측 | [[gpqa-diamond]] 53.5353535353535%×1.0, [[humanitys-last-exam]] 4.130000000000001%×1.0 |
| 코딩 | 36.1 | -0.93 | 추정 | (추정) |
| 에이전트 | 39.2 | -0.72 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.1 | -1.59 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 33.3 | -1.12 | 실측 | [[ifbench]] 31.496598639455797%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
