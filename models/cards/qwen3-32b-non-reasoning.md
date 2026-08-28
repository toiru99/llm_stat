---
type: Model
title: Qwen3 32B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 8.0
price_blended_usd_1m: 0.208
output_speed_tps: 107.0
context_window: 32800
status: past
size_class: Small
params_b: 32.8
is_reasoning: false
radar:
  knowledge: { s: 32.0, z: -0.43, r: 43.5, estimated: false }  # 전문 지식
  reasoning: { s: 28.7, z: -0.29, r: 45.6, estimated: false }  # 추론
  coding: { s: 46.7, z: -0.04, r: 49.4, estimated: false }  # 코딩
  agentic: { s: 16.3, z: -0.81, r: 37.9, estimated: true }  # 에이전트
  trust: { s: 28.5, z: 0.2, r: 53.1, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.51, r: 27.3, estimated: false }  # 긴문맥
  instruction: { s: 26.8, z: -1.07, r: 33.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 32B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Qwen3 32B (Non-reasoning)

Alibaba · Open · Small(32.8B) · 컨텍스트 32k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.16 · 출력 $0.64 · 혼합 $0.208/1M · 107.0 t/s · TTFT 2.42s · 32k ctx` · 가성비 38.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.5 | -0.43 | 실측 | [[gpqa-diamond]] 54.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 45.6 | -0.29 | 실측 | [[gpqa-diamond]] 54.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 49.4 | -0.04 | 실측 | [[scicode]] 28.0%×1.0 |
| 에이전트 | 37.9 | -0.81 | 추정 | (추정) |
| 신뢰성 | 53.1 | +0.2 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.3 | -1.51 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 33.9 | -1.07 | 실측 | [[ifbench]] 31.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
