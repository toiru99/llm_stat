---
type: Model
title: QwQ-32B
creator: Alibaba
license: Open
intelligence_index: 13.0
price_blended_usd_1m: 0.694
output_speed_tps: None
context_window: 131000
status: past
size_class: Small
params_b: 32.8
is_reasoning: true
radar:
  knowledge: { s: 37.7, z: -0.17, r: 47.5, estimated: false }  # 전문 지식
  reasoning: { s: 34.4, z: -0.05, r: 49.3, estimated: false }  # 추론
  coding: { s: 60.0, z: 0.48, r: 57.2, estimated: false }  # 코딩
  agentic: { s: 33.3, z: -0.13, r: 48.0, estimated: true }  # 에이전트
  trust: { s: 25.1, z: -0.09, r: 48.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 31.3, z: -0.58, r: 41.4, estimated: false }  # 긴문맥
  instruction: { s: 38.0, z: -0.66, r: 40.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — QwQ-32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-15
timestamp: 2026-08-15T00:00:00Z
---

# QwQ-32B

Alibaba · Open · Small(32.8B) · 컨텍스트 131k · 종합지능 **13.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $0.66 · 출력 $1.0 · 혼합 $0.694/1M · None t/s · TTFT Nones · 131k ctx` · 가성비 18.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.5 | -0.17 | 실측 | [[gpqa-diamond]] 59.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 49.3 | -0.05 | 실측 | [[gpqa-diamond]] 59.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 57.2 | +0.48 | 실측 | [[scicode]] 36.0%×1.0 |
| 에이전트 | 48.0 | -0.13 | 추정 | (추정) |
| 신뢰성 | 48.7 | -0.09 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 41.4 | -0.58 | 실측 | [[aa-lcr]] 26.0%×1.0 |
| 지시 따르기 | 40.1 | -0.66 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
