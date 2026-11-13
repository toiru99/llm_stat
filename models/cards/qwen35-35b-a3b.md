---
type: Model
title: Qwen3.5 35B A3B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.425
output_speed_tps: None
context_window: 262000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 61.0, z: 0.67, r: 60.0, estimated: false }  # 전문 지식
  reasoning: { s: 56.8, z: 0.66, r: 59.8, estimated: false }  # 추론
  coding: { s: 40.2, z: 0.08, r: 51.2, estimated: false }  # 코딩
  agentic: { s: 38.9, z: 0.13, r: 52.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 78.4, z: 0.35, r: 55.2, estimated: false }  # 멀티모달
  long_context: { s: 81.2, z: 0.84, r: 62.6, estimated: false }  # 긴문맥
  instruction: { s: 84.8, z: 1.36, r: 70.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 35B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Qwen3.5 35B A3B

Alibaba · Open · Unknown · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.425/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.0 | +0.67 | 실측 | [[gpqa-diamond]] 84.5%×0.4, [[humanitys-last-exam]] 21.0%×0.3 |
| 추론 | 59.8 | +0.66 | 실측 | [[gpqa-diamond]] 84.5%×1.0, [[humanitys-last-exam]] 21.0%×1.0 |
| 코딩 | 51.2 | +0.08 | 실측 | [[terminal-bench]] 26.5%×0.5 |
| 에이전트 | 52.0 | +0.13 | 실측 | [[itbench]] 21.5%×1.0, [[terminal-bench]] 26.5%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.2 | +0.35 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 62.6 | +0.84 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 70.5 | +1.36 | 실측 | [[ifbench]] 72.5%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
