---
type: Model
title: Hy3-preview
creator: Tencent
license: Open
intelligence_index: None
price_blended_usd_1m: 0.0483
output_speed_tps: None
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 66.4, z: 0.94, r: 64.1, estimated: false }  # 전문 지식
  reasoning: { s: 62.7, z: 0.96, r: 64.4, estimated: false }  # 추론
  coding: { s: 51.7, z: 0.47, r: 57.1, estimated: false }  # 코딩
  agentic: { s: 51.7, z: 0.57, r: 58.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 72.9, z: 0.6, r: 58.9, estimated: false }  # 긴문맥
  instruction: { s: 71.6, z: 0.81, r: 62.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hy3-preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# Hy3-preview

Tencent · Open · Unknown · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.063 · 출력 $0.21 · 혼합 $0.0483/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.1 | +0.94 | 실측 | [[gpqa-diamond]] 86.7%×0.4, [[humanitys-last-exam]] 27.8%×0.3 |
| 추론 | 64.4 | +0.96 | 실측 | [[gpqa-diamond]] 86.7%×1.0, [[humanitys-last-exam]] 27.8%×1.0 |
| 코딩 | 57.1 | +0.47 | 실측 | [[terminal-bench]] 34.1%×0.5 |
| 에이전트 | 58.6 | +0.57 | 실측 | [[terminal-bench]] 34.1%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.9 | +0.6 | 실측 | [[aa-lcr]] 64.7%×1.0 |
| 지시 따르기 | 62.2 | +0.81 | 실측 | [[ifbench]] 63.1%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
