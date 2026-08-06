---
type: Model
title: QwQ-32B
creator: Alibaba
license: Open
intelligence_index: 13.0
price_blended_usd_1m: 0.694
output_speed_tps: 32.0
context_window: 131000
status: past
size_class: Small
params_b: 32.8
is_reasoning: true
radar:
  knowledge: { s: 39.1, z: -0.11, r: 48.4, estimated: false }  # 전문 지식
  reasoning: { s: 35.9, z: 0.06, r: 50.9, estimated: false }  # 추론
  coding: { s: 60.0, z: 0.52, r: 57.9, estimated: false }  # 코딩
  agentic: { s: 38.6, z: 0.11, r: 51.7, estimated: true }  # 에이전트
  trust: { s: 20.7, z: -0.37, r: 44.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 32.9, z: -0.5, r: 42.5, estimated: false }  # 긴문맥
  instruction: { s: 38.0, z: -0.63, r: 40.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — QwQ-32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# QwQ-32B

Alibaba · Open · Small(32.8B) · 컨텍스트 131k · 종합지능 **13.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $0.66 · 출력 $1.0 · 혼합 $0.694/1M · 32.0 t/s · TTFT 2.13s · 131k ctx` · 가성비 18.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.4 | -0.11 | 실측 | [[gpqa-diamond]] 59.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 50.9 | +0.06 | 실측 | [[gpqa-diamond]] 59.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 57.9 | +0.52 | 실측 | [[scicode]] 36.0%×1.0 |
| 에이전트 | 51.7 | +0.11 | 추정 | (추정) |
| 신뢰성 | 44.5 | -0.37 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 42.5 | -0.5 | 실측 | [[aa-lcr]] 25.0%×1.0 |
| 지시 따르기 | 40.6 | -0.63 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
