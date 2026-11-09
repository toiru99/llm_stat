---
type: Model
title: Qwen3.5 27B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.51
output_speed_tps: None
context_window: 262000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 66.4, z: 0.75, r: 61.3, estimated: false }  # 전문 지식
  reasoning: { s: 62.8, z: 0.78, r: 61.7, estimated: false }  # 추론
  coding: { s: 49.5, z: 0.4, r: 56.0, estimated: false }  # 코딩
  agentic: { s: 56.1, z: 0.74, r: 61.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 81.1, z: 0.49, r: 57.3, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.04, r: 65.7, estimated: false }  # 긴문맥
  instruction: { s: 89.2, z: 1.54, r: 73.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 27B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# Qwen3.5 27B

Alibaba · Open · Unknown · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 코딩

## 실용 지표
`입력 $0.3 · 출력 $2.4 · 혼합 $0.51/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.3 | +0.75 | 실측 | [[gpqa-diamond]] 85.8%×0.4, [[humanitys-last-exam]] 23.9%×0.3 |
| 추론 | 61.7 | +0.78 | 실측 | [[gpqa-diamond]] 85.8%×1.0, [[humanitys-last-exam]] 23.9%×1.0 |
| 코딩 | 56.0 | +0.4 | 실측 | [[terminal-bench]] 32.6%×0.5 |
| 에이전트 | 61.2 | +0.74 | 실측 | [[itbench]] 35.5%×1.0, [[terminal-bench]] 32.6%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 57.3 | +0.49 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 65.7 | +1.04 | 실측 | [[aa-lcr]] 77.7%×1.0 |
| 지시 따르기 | 73.1 | +1.54 | 실측 | [[ifbench]] 75.6%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
