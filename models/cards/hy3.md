---
type: Model
title: Hy3
creator: Tencent
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1105
output_speed_tps: 65.9730670869794
context_window: 256000
status: past
size_class: Large
params_b: 299
is_reasoning: true
radar:
  knowledge: { s: 71.8, z: 1.21, r: 68.2, estimated: false }  # 전문 지식
  reasoning: { s: 50.1, z: 0.74, r: 61.1, estimated: false }  # 추론
  coding: { s: 68.6, z: 0.93, r: 63.9, estimated: false }  # 코딩
  agentic: { s: 54.6, z: 0.26, r: 54.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.1, z: 0.96, r: 64.4, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hy3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Hy3

Tencent · Open · Large(299B) · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.14 · 출력 $0.58 · 혼합 $0.1105/1M · 65.9730670869794 t/s · TTFT 4.71333133785836s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 68.2 | +1.21 | 실측 | [[gpqa-diamond]] 89.697%×0.4, [[humanitys-last-exam]] 33.4569%×0.3 |
| 추론 | 61.1 | +0.74 | 실측 | [[critpt]] 4.85714%×1.0, [[gpqa-diamond]] 89.697%×1.0, [[humanitys-last-exam]] 33.4569%×1.0 |
| 코딩 | 63.9 | +0.93 | 실측 | [[scicode]] 48.6111%×1.0 |
| 에이전트 | 54.0 | +0.26 | 실측 | [[gdpval]] 1068.78 Elo×1.0, [[tau3-banking]] 22.8866%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.4 | +0.96 | 실측 | [[aa-lcr]] 79%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
