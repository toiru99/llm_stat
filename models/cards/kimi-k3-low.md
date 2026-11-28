---
type: Model
title: Kimi K3 (low)
creator: Kimi
license: Open
intelligence_index: 17.4191985300887
price_blended_usd_1m: 2.31
output_speed_tps: 40.9971299098249
context_window: 1048576
status: past
size_class: Large
params_b: 2800
is_reasoning: true
radar:
  knowledge: { s: 63.2, z: 0.8, r: 62.0, estimated: false }  # 전문 지식
  reasoning: { s: 42.5, z: 0.37, r: 55.5, estimated: false }  # 추론
  coding: { s: 75.2, z: 1.15, r: 67.3, estimated: false }  # 코딩
  agentic: { s: 74.4, z: 0.96, r: 64.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.4, z: 0.71, r: 60.7, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 0.97, r: 64.6, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K3 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Kimi K3 (low)

Kimi · Open · Large(2800B) · 컨텍스트 1M · 종합지능 **17.4191985300887** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 40.9971299098249 t/s · TTFT 4.49389521304031s · 1M ctx` · 가성비 7.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 62.0 | +0.8 | 실측 | [[gpqa-diamond]] 84.2424%×0.4, [[humanitys-last-exam]] 24.9768%×0.3 |
| 추론 | 55.5 | +0.37 | 실측 | [[critpt]] 3.14286%×1.0, [[gpqa-diamond]] 84.2424%×1.0, [[humanitys-last-exam]] 24.9768%×1.0 |
| 코딩 | 67.3 | +1.15 | 실측 | [[scicode]] 52.662%×1.0 |
| 에이전트 | 64.4 | +0.96 | 실측 | [[gdpval]] 1135.99 Elo×1.0, [[tau3-banking]] 41.6495%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.7 | +0.71 | 실측 | [[mmmu-pro]] 78.4971%×1.0 |
| 긴문맥 | 64.6 | +0.97 | 실측 | [[aa-lcr]] 79.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
