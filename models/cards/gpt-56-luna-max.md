---
type: Model
title: GPT-5.6 Luna (max)
creator: OpenAI
license: Proprietary
intelligence_index: 23.7902433286348
price_blended_usd_1m: 0.174
output_speed_tps: 98.79358223743934
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 76.2, z: 1.39, r: 70.9, estimated: false }  # 전문 지식
  reasoning: { s: 68.0, z: 1.6, r: 74.0, estimated: false }  # 추론
  coding: { s: 76.8, z: 1.25, r: 68.7, estimated: false }  # 코딩
  agentic: { s: 71.5, z: 0.92, r: 63.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.4, z: 0.72, r: 60.7, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.21, r: 68.1, estimated: false }  # 긴문맥
  instruction: { s: 78.8, z: 1.04, r: 65.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# GPT-5.6 Luna (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **23.7902433286348** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 98.79358223743934 t/s · TTFT 43.98682635309441s · 1M ctx` · 가성비 136.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.9 | +1.39 | 실측 | [[gpqa-diamond]] 91.1111111111111%×0.4, [[humanitys-last-exam]] 39.4810009267841%×0.3 |
| 추론 | 74.0 | +1.6 | 실측 | [[critpt]] 20.571428571428598%×1.0, [[gpqa-diamond]] 91.1111111111111%×1.0, [[humanitys-last-exam]] 39.4810009267841%×1.0 |
| 코딩 | 68.7 | +1.25 | 실측 | [[scicode]] 53.587962962963%×1.0 |
| 에이전트 | 63.8 | +0.92 | 실측 | [[gdpval]] 1469.7%×1.0, [[tau3-banking]] 31.1340206185567%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.7 | +0.72 | 실측 | [[mmmu-pro]] 78.5549132947977%×1.0 |
| 긴문맥 | 68.1 | +1.21 | 실측 | [[aa-lcr]] 83.6666666666667%×1.0 |
| 지시 따르기 | 65.6 | +1.04 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
