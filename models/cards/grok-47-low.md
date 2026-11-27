---
type: Model
title: Grok 4.7 (low)
creator: SpaceXAI
license: Proprietary
intelligence_index: 31.132077602567
price_blended_usd_1m: 1.35
output_speed_tps: 75.5559969257415
context_window: 500000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.0, z: 0.26, r: 53.8, estimated: false }  # 전문 지식
  reasoning: { s: 44.8, z: 0.48, r: 57.2, estimated: false }  # 추론
  coding: { s: 78.9, z: 1.27, r: 69.1, estimated: false }  # 코딩
  agentic: { s: 87.7, z: 1.43, r: 71.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 84.9, z: 0.69, r: 60.3, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 1.0, r: 64.9, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.7 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Grok 4.7 (low)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **31.132077602567**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · 75.5559969257415 t/s · TTFT 10.7688980257279s · 500k ctx` · 가성비 23.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 53.8 | +0.26 | 실측 | [[humanitys-last-exam]] 39.1566%×0.3 |
| 추론 | 57.2 | +0.48 | 실측 | [[critpt]] 13.4286%×1.0, [[humanitys-last-exam]] 39.1566%×1.0 |
| 코딩 | 69.1 | +1.27 | 실측 | [[scicode]] 54.8611%×1.0 |
| 에이전트 | 71.4 | +1.43 | 실측 | [[gdpval]] 1586.38 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.3 | +0.69 | 실측 | [[mmmu-pro]] 78.1503%×1.0 |
| 긴문맥 | 64.9 | +1.0 | 실측 | [[aa-lcr]] 80%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
