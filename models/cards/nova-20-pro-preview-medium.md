---
type: Model
title: Nova 2.0 Pro Preview (medium)
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.4684
output_speed_tps: 101.426616197097
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 50.3, z: 0.17, r: 52.6, estimated: false }  # 전문 지식
  reasoning: { s: 30.3, z: -0.24, r: 46.4, estimated: false }  # 추론
  coding: { s: 36.8, z: -0.14, r: 47.8, estimated: false }  # 코딩
  agentic: { s: 56.3, z: 0.33, r: 54.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 66.7, z: -0.24, r: 46.4, estimated: false }  # 멀티모달
  long_context: { s: 72.2, z: 0.44, r: 56.7, estimated: false }  # 긴문맥
  instruction: { s: 94.0, z: 1.81, r: 77.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Pro Preview (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Nova 2.0 Pro Preview (medium)

Amazon · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.4684/1M · 101.426616197097 t/s · TTFT 13.5796648909797s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 52.6 | +0.17 | 실측 | [[gpqa-diamond]] 78.4848%×0.4, [[humanitys-last-exam]] 9.40686%×0.3 |
| 추론 | 46.4 | -0.24 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 78.4848%×1.0, [[humanitys-last-exam]] 9.40686%×1.0 |
| 코딩 | 47.8 | -0.14 | 실측 | [[terminal-bench]] 24.2424%×0.5 |
| 에이전트 | 54.9 | +0.33 | 실측 | [[gdpval]] 476.51 Elo×1.0, [[tau2-bench]] 92.6901%×1.0, [[terminal-bench]] 24.2424%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 46.4 | -0.24 | 실측 | [[mmmu-pro]] 64.5087%×1.0 |
| 긴문맥 | 56.7 | +0.44 | 실측 | [[aa-lcr]] 64%×1.0 |
| 지시 따르기 | 77.2 | +1.81 | 실측 | [[ifbench]] 79.0476%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
