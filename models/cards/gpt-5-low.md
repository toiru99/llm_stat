---
type: Model
title: GPT-5 (low)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.3375
output_speed_tps: 74.9089646650523
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 57.8, z: 0.53, r: 58.0, estimated: false }  # 전문 지식
  reasoning: { s: 36.9, z: 0.08, r: 51.3, estimated: false }  # 추론
  coding: { s: 40.2, z: -0.03, r: 49.6, estimated: false }  # 코딩
  agentic: { s: 62.6, z: 0.55, r: 58.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.0, z: 0.39, r: 55.8, estimated: false }  # 멀티모달
  long_context: { s: null, z: null, r: null, estimated: false }  # 긴문맥
  instruction: { s: 76.5, z: 1.08, r: 66.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# GPT-5 (low)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 추론, 코딩

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · 74.9089646650523 t/s · TTFT 10.850482242589s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 58.0 | +0.53 | 실측 | [[gpqa-diamond]] 80.8081%×0.4, [[humanitys-last-exam]] 19.5551%×0.3 |
| 추론 | 51.3 | +0.08 | 실측 | [[critpt]] 1.14286%×1.0, [[gpqa-diamond]] 80.8081%×1.0, [[humanitys-last-exam]] 19.5551%×1.0 |
| 코딩 | 49.6 | -0.03 | 실측 | [[terminal-bench]] 26.5152%×0.5 |
| 에이전트 | 58.2 | +0.55 | 실측 | [[tau2-bench]] 84.2105%×1.0, [[terminal-bench]] 26.5152%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.8 | +0.39 | 실측 | [[mmmu-pro]] 73.7572%×1.0 |
| 긴문맥 | — | — | 측정 안 됨 | — |
| 지시 따르기 | 66.3 | +1.08 | 실측 | [[ifbench]] 66.5986%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
