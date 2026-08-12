---
type: Model
title: QwQ 32B-Preview
creator: Alibaba
license: Open
intelligence_index: 9.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32800
status: past
size_class: Small
params_b: 32.8
is_reasoning: true
radar:
  knowledge: { s: 33.7, z: -0.34, r: 44.9, estimated: false }  # 전문 지식
  reasoning: { s: 30.2, z: -0.24, r: 46.5, estimated: false }  # 추론
  coding: { s: 6.7, z: -1.69, r: 24.6, estimated: false }  # 코딩
  agentic: { s: 17.0, z: -0.75, r: 38.7, estimated: true }  # 에이전트
  trust: { s: 22.9, z: -0.15, r: 47.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 20.7, z: -0.87, r: 36.9, estimated: true }  # 긴문맥
  instruction: { s: 35.5, z: -0.75, r: 38.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — QwQ 32B-Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# QwQ 32B-Preview

Alibaba · Open · Small(32.8B) · 컨텍스트 32k · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.9 | -0.34 | 실측 | [[gpqa-diamond]] 56.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 46.5 | -0.24 | 실측 | [[gpqa-diamond]] 56.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 24.6 | -1.69 | 실측 | [[scicode]] 4.0%×1.0 |
| 에이전트 | 38.7 | -0.75 | 추정 | (추정) |
| 신뢰성 | 47.7 | -0.15 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 36.9 | -0.87 | 추정 | (추정) |
| 지시 따르기 | 38.7 | -0.75 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
