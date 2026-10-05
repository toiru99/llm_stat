---
type: Model
title: Qwen3 32B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 7.0
price_blended_usd_1m: 0.208
output_speed_tps: 107.0
context_window: 32800
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 31.4, z: -0.52, r: 42.2, estimated: false }  # 전문 지식
  reasoning: { s: 28.1, z: -0.38, r: 44.3, estimated: false }  # 추론
  coding: { s: 9.5, z: -0.92, r: 36.1, estimated: true }  # 코딩
  agentic: { s: 21.1, z: -0.68, r: 39.8, estimated: true }  # 에이전트
  trust: { s: 13.4, z: -0.61, r: 40.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.56, r: 26.6, estimated: false }  # 긴문맥
  instruction: { s: 26.8, z: -1.14, r: 32.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 32B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-05
timestamp: 2026-10-05T00:00:00Z
---

# Qwen3 32B (non-reasoning)

Alibaba · Open · Small · 컨텍스트 32k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.16 · 출력 $0.64 · 혼합 $0.208/1M · 107.0 t/s · TTFT 2.55s · 32k ctx` · 가성비 33.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.2 | -0.52 | 실측 | [[gpqa-diamond]] 54.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 44.3 | -0.38 | 실측 | [[gpqa-diamond]] 54.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 36.1 | -0.92 | 추정 | (추정) |
| 에이전트 | 39.8 | -0.68 | 추정 | (추정) |
| 신뢰성 | 40.9 | -0.61 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.6 | -1.56 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 32.8 | -1.14 | 실측 | [[ifbench]] 31.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
