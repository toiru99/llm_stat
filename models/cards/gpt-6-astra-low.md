---
type: Model
title: GPT-6 Astra (low)
creator: OpenAI
license: Proprietary
intelligence_index: 43.4864974743676
price_blended_usd_1m: 7.7
output_speed_tps: 46.5846229958083
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.3, z: 1.77, r: 76.6, estimated: false }  # 전문 지식
  reasoning: { s: 78.6, z: 2.16, r: 82.4, estimated: false }  # 추론
  coding: { s: 77.5, z: 1.23, r: 68.4, estimated: false }  # 코딩
  agentic: { s: 70.9, z: 0.84, r: 62.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 93.5, z: 1.13, r: 66.9, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 1.0, r: 64.9, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Astra (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# GPT-6 Astra (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **43.4864974743676** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · 46.5846229958083 t/s · TTFT 3.04351142895649s · 1M ctx` · 가성비 5.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 76.6 | +1.77 | 실측 | [[gpqa-diamond]] 93.1313%×0.4, [[humanitys-last-exam]] 49.2122%×0.3 |
| 추론 | 82.4 | +2.16 | 실측 | [[critpt]] 26.2857%×1.0, [[gpqa-diamond]] 93.1313%×1.0, [[humanitys-last-exam]] 49.2122%×1.0 |
| 코딩 | 68.4 | +1.23 | 실측 | [[scicode]] 54.0509%×1.0 |
| 에이전트 | 62.6 | +0.84 | 실측 | [[gdpval]] 1404.03 Elo×1.0, [[tau3-banking]] 31.9588%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 66.9 | +1.13 | 실측 | [[mmmu-pro]] 84.6243%×1.0 |
| 긴문맥 | 64.9 | +1.0 | 실측 | [[aa-lcr]] 80%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
