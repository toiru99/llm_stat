---
type: Model
title: Qwen3.5 27B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.51
output_speed_tps: 78.0
context_window: 262000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 66.9, z: 0.77, r: 61.6, estimated: false }  # 전문 지식
  reasoning: { s: 63.4, z: 0.79, r: 61.9, estimated: false }  # 추론
  coding: { s: 50.0, z: 0.43, r: 56.5, estimated: false }  # 코딩
  agentic: { s: 55.9, z: 0.75, r: 61.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 82.2, z: 0.5, r: 57.5, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.06, r: 65.9, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.56, r: 73.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 27B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# Qwen3.5 27B

Alibaba · Open · Unknown · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 코딩

## 실용 지표
`입력 $0.3 · 출력 $2.4 · 혼합 $0.51/1M · 78.0 t/s · TTFT 5.78s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.6 | +0.77 | 실측 | [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 24.0%×0.3 |
| 추론 | 61.9 | +0.79 | 실측 | [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 24.0%×1.0 |
| 코딩 | 56.5 | +0.43 | 실측 | [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 61.2 | +0.75 | 실측 | [[itbench]] 35.0%×1.0, [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 57.5 | +0.5 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 65.9 | +1.06 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 73.5 | +1.56 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
