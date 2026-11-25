---
type: Model
title: Nova 2.0 Pro Preview (low)
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.125
output_speed_tps: 92.6094927528175
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 45.5, z: -0.06, r: 49.1, estimated: false }  # 전문 지식
  reasoning: { s: 27.0, z: -0.4, r: 43.9, estimated: false }  # 추론
  coding: { s: 26.4, z: -0.49, r: 42.6, estimated: false }  # 코딩
  agentic: { s: 51.7, z: 0.16, r: 52.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 64.3, z: -0.36, r: 44.6, estimated: false }  # 멀티모달
  long_context: { s: 72.9, z: 0.47, r: 57.0, estimated: false }  # 긴문맥
  instruction: { s: 94.7, z: 1.84, r: 77.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Pro Preview (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Nova 2.0 Pro Preview (low)

Amazon · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 코딩

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $2.125/1M · 92.6094927528175 t/s · TTFT 6.59987786034783s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 49.1 | -0.06 | 실측 | [[gpqa-diamond]] 75.0505%×0.4, [[humanitys-last-exam]] 5.18999%×0.3 |
| 추론 | 43.9 | -0.4 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 75.0505%×1.0, [[humanitys-last-exam]] 5.18999%×1.0 |
| 코딩 | 42.6 | -0.49 | 실측 | [[terminal-bench]] 17.4242%×0.5 |
| 에이전트 | 52.4 | +0.16 | 실측 | [[gdpval]] 443.31 Elo×1.0, [[tau2-bench]] 90.6433%×1.0, [[terminal-bench]] 17.4242%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 44.6 | -0.36 | 실측 | [[mmmu-pro]] 62.7168%×1.0 |
| 긴문맥 | 57.0 | +0.47 | 실측 | [[aa-lcr]] 64.6667%×1.0 |
| 지시 따르기 | 77.6 | +1.84 | 실측 | [[ifbench]] 79.5918%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
