---
type: Model
title: QwQ-32B
creator: Alibaba
license: Open
intelligence_index: 9.0
price_blended_usd_1m: 0.694
output_speed_tps: None
context_window: 131000
status: past
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 36.8, z: -0.26, r: 46.0, estimated: false }  # 전문 지식
  reasoning: { s: 33.5, z: -0.14, r: 47.9, estimated: false }  # 추론
  coding: { s: 7.9, z: -0.98, r: 35.3, estimated: true }  # 코딩
  agentic: { s: 9.9, z: -1.1, r: 33.4, estimated: true }  # 에이전트
  trust: { s: 17.3, z: -0.43, r: 43.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 30.3, z: -0.64, r: 40.3, estimated: false }  # 긴문맥
  instruction: { s: 38.0, z: -0.68, r: 39.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — QwQ-32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-05
timestamp: 2026-10-05T00:00:00Z
---

# QwQ-32B

Alibaba · Open · Small · 컨텍스트 131k · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.66 · 출력 $1.0 · 혼합 $0.694/1M · None t/s · TTFT Nones · 131k ctx` · 가성비 13.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.0 | -0.26 | 실측 | [[gpqa-diamond]] 59.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 47.9 | -0.14 | 실측 | [[gpqa-diamond]] 59.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 35.3 | -0.98 | 추정 | (추정) |
| 에이전트 | 33.4 | -1.1 | 추정 | (추정) |
| 신뢰성 | 43.6 | -0.43 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 40.3 | -0.64 | 실측 | [[aa-lcr]] 27.0%×1.0 |
| 지시 따르기 | 39.9 | -0.68 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
