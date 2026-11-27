---
type: Model
title: Agnes 2.5 Pro Theta
creator: Sapiens AI
license: Proprietary
intelligence_index: 24.0795175738641
price_blended_usd_1m: 0.057
output_speed_tps: 151.252069567518
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 49.3, z: 0.12, r: 51.8, estimated: false }  # 전문 지식
  reasoning: { s: 45.9, z: 0.53, r: 58.0, estimated: false }  # 추론
  coding: { s: 80.8, z: 1.34, r: 70.1, estimated: false }  # 코딩
  agentic: { s: 84.2, z: 1.3, r: 69.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.3, z: 0.71, r: 60.6, estimated: false }  # 멀티모달
  long_context: { s: 95.5, z: 1.16, r: 67.4, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Agnes 2.5 Pro Theta
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Agnes 2.5 Pro Theta

Sapiens AI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **24.0795175738641**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.057/1M · 151.252069567518 t/s · TTFT 2.98097452634452s · 1M ctx` · 가성비 422.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 51.8 | +0.12 | 실측 | [[humanitys-last-exam]] 37.164%×0.3 |
| 추론 | 58.0 | +0.53 | 실측 | [[critpt]] 15.1429%×1.0, [[humanitys-last-exam]] 37.164%×1.0 |
| 코딩 | 70.1 | +1.34 | 실측 | [[scicode]] 56.0185%×1.0 |
| 에이전트 | 69.5 | +1.3 | 실측 | [[gdpval]] 1507 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.6 | +0.71 | 실측 | [[mmmu-pro]] 78.4393%×1.0 |
| 긴문맥 | 67.4 | +1.16 | 실측 | [[aa-lcr]] 84.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
