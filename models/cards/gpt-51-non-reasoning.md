---
type: Model
title: GPT-5.1 (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.3375
output_speed_tps: 86.1500468619644
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 38.5, z: -0.4, r: 44.0, estimated: false }  # 전문 지식
  reasoning: { s: 22.9, z: -0.61, r: 40.9, estimated: false }  # 추론
  coding: { s: 34.5, z: -0.22, r: 46.7, estimated: false }  # 코딩
  agentic: { s: 40.7, z: -0.23, r: 46.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 63.8, z: -0.39, r: 44.2, estimated: false }  # 멀티모달
  long_context: { s: 50.8, z: -0.21, r: 46.8, estimated: false }  # 긴문맥
  instruction: { s: 43.6, z: -0.28, r: 45.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.1 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# GPT-5.1 (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · 86.1500468619644 t/s · TTFT 2.59276644420633s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 44.0 | -0.4 | 실측 | [[gpqa-diamond]] 64.3434%×0.4, [[humanitys-last-exam]] 5.28267%×0.3 |
| 추론 | 40.9 | -0.61 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 64.3434%×1.0, [[humanitys-last-exam]] 5.28267%×1.0 |
| 코딩 | 46.7 | -0.22 | 실측 | [[terminal-bench]] 22.7273%×0.5 |
| 에이전트 | 46.6 | -0.23 | 실측 | [[tau2-bench]] 46.4912%×1.0, [[terminal-bench]] 22.7273%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 44.2 | -0.39 | 실측 | [[mmmu-pro]] 62.3699%×1.0 |
| 긴문맥 | 46.8 | -0.21 | 실측 | [[aa-lcr]] 45%×1.0 |
| 지시 따르기 | 45.8 | -0.28 | 실측 | [[ifbench]] 43.1973%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
