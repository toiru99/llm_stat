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
  knowledge: { s: 34.6, z: -0.32, r: 45.3, estimated: false }  # 전문 지식
  reasoning: { s: 31.2, z: -0.17, r: 47.5, estimated: false }  # 추론
  coding: { s: 6.7, z: -1.68, r: 24.7, estimated: false }  # 코딩
  agentic: { s: 17.2, z: -0.75, r: 38.7, estimated: true }  # 에이전트
  trust: { s: 23.5, z: -0.23, r: 46.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 20.3, z: -0.87, r: 37.0, estimated: true }  # 긴문맥
  instruction: { s: 37.9, z: -0.63, r: 40.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — QwQ 32B-Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-04
timestamp: 2026-08-04T00:00:00Z
---

# QwQ 32B-Preview

Alibaba · Open · Small(32.8B) · 컨텍스트 32k · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 신뢰성
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.3 | -0.32 | 실측 | [[gpqa-diamond]] 56.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 47.5 | -0.17 | 실측 | [[gpqa-diamond]] 56.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 24.7 | -1.68 | 실측 | [[scicode]] 4.0%×1.0 |
| 에이전트 | 38.7 | -0.75 | 추정 | (추정) |
| 신뢰성 | 46.6 | -0.23 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.0 | -0.87 | 추정 | (추정) |
| 지시 따르기 | 40.6 | -0.63 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
