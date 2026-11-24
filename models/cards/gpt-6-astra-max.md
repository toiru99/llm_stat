---
type: Model
title: GPT-6 Astra (max)
creator: OpenAI
license: Proprietary
intelligence_index: 56.8538559596797
price_blended_usd_1m: 7.7
output_speed_tps: 47.716812981948
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 88.4, z: 2.02, r: 80.3, estimated: false }  # 전문 지식
  reasoning: { s: 87.3, z: 2.59, r: 88.8, estimated: false }  # 추론
  coding: { s: 81.5, z: 1.36, r: 70.5, estimated: false }  # 코딩
  agentic: { s: 84.2, z: 1.31, r: 69.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 96.5, z: 1.28, r: 69.2, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Astra (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-6 Astra (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **56.8538559596797** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 긴문맥

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · 47.716812981948 t/s · TTFT 174.51575025785s · 1M ctx` · 가성비 7.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 80.3 | +2.02 | 실측 | [[gpqa-diamond]] 96.0606%×0.4, [[humanitys-last-exam]] 54.6803%×0.3 |
| 추론 | 88.8 | +2.59 | 실측 | [[critpt]] 31.7143%×1.0, [[gpqa-diamond]] 96.0606%×1.0, [[humanitys-last-exam]] 54.6803%×1.0 |
| 코딩 | 70.5 | +1.36 | 실측 | [[scicode]] 56.4815%×1.0 |
| 에이전트 | 69.6 | +1.31 | 실측 | [[gdpval]] 1587 Elo×1.0, [[tau3-banking]] 41.4433%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 69.2 | +1.28 | 실측 | [[mmmu-pro]] 86.8786%×1.0 |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 80.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
