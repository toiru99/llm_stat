---
type: Model
title: QwQ 32B-Preview
creator: Alibaba
license: Open
intelligence_index: 4.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32800
status: past
size_class: Small
params_b: 32.8
is_reasoning: true
radar:
  knowledge: { s: 32.8, z: -0.39, r: 44.1, estimated: false }  # 전문 지식
  reasoning: { s: 29.3, z: -0.28, r: 45.9, estimated: false }  # 추론
  coding: { s: 15.8, z: -0.57, r: 41.4, estimated: true }  # 코딩
  agentic: { s: 26.4, z: -0.43, r: 43.6, estimated: true }  # 에이전트
  trust: { s: 17.2, z: -0.35, r: 44.8, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 57.5, z: 0.26, r: 53.9, estimated: true }  # 긴문맥
  instruction: { s: 49.7, z: -0.13, r: 48.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — QwQ 32B-Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# QwQ 32B-Preview

Alibaba · Open · Small(32.8B) · 컨텍스트 32k · 종합지능 **4.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.1 | -0.39 | 실측 | [[gpqa-diamond]] 56.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 45.9 | -0.28 | 실측 | [[gpqa-diamond]] 56.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 41.4 | -0.57 | 추정 | (추정) |
| 에이전트 | 43.6 | -0.43 | 추정 | (추정) |
| 신뢰성 | 44.8 | -0.35 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 53.9 | +0.26 | 추정 | (추정) |
| 지시 따르기 | 48.1 | -0.13 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
